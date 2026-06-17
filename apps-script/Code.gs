const SPREADSHEET_ID = "1rQ7_T27D72z-eZk0U3n-p4utZ50GPqoeeJY3g4ZqQS4";
const SHEET_NAME = "Records";
const TEACHER_KEY_PROPERTY = "TEACHER_RECORDS_KEY";
const HEADERS = [
  "createdAt",
  "finishedAt",
  "className",
  "seatNumber",
  "studentName",
  "paperTitle",
  "correct",
  "total",
  "percent",
];

function doGet(e) {
  const params = e.parameter || {};
  const action = params.action || "leaderboard";

  if (action === "submit") {
    appendRecord(params);
  }

  if (action === "records") {
    if (!isTeacherAuthorized(params.key)) {
      return output({
        ok: false,
        error: "unauthorized",
        records: [],
      }, params.callback);
    }

    return output({
      ok: true,
      records: getAllRecords(),
      summary: getRecordsSummary(),
    }, params.callback);
  }

  return output({
    ok: true,
    records: getTopRecords(),
  }, params.callback);
}

function appendRecord(params) {
  const sheet = getSheet();
  const record = [
    params.createdAt || new Date().toISOString(),
    params.finishedAt || "",
    clean(params.className),
    clean(params.seatNumber),
    clean(params.studentName),
    clean(params.paperTitle),
    toNumber(params.correct),
    toNumber(params.total),
    toNumber(params.percent),
  ];
  sheet.appendRow(record);
}

function getTopRecords() {
  const sheet = getSheet();
  const lastRow = sheet.getLastRow();
  if (lastRow <= 1) return [];

  const rows = sheet.getRange(2, 1, lastRow - 1, HEADERS.length).getValues();
  return rows
    .map(rowToRecord)
    .filter((record) => record.studentName && Number.isFinite(record.percent))
    .sort((a, b) => {
      if (b.percent !== a.percent) return b.percent - a.percent;
      if (b.correct !== a.correct) return b.correct - a.correct;
      return new Date(b.createdAt) - new Date(a.createdAt);
    })
    .slice(0, 5);
}

function getAllRecords() {
  const sheet = getSheet();
  const lastRow = sheet.getLastRow();
  if (lastRow <= 1) return [];

  const rows = sheet.getRange(2, 1, lastRow - 1, HEADERS.length).getValues();
  return rows
    .map(rowToRecord)
    .filter((record) => record.studentName && Number.isFinite(record.percent))
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

function getRecordsSummary() {
  const records = getAllRecords();
  const seatMap = {};

  records.forEach((record) => {
    splitSeatNumbers(record.seatNumber).forEach((seatNumber) => {
      if (!seatMap[seatNumber]) {
        seatMap[seatNumber] = {
          seatNumber,
          names: [],
          attempts: 0,
          bestPercent: 0,
          bestCorrect: 0,
          papers: [],
          latestAt: "",
        };
      }

      const item = seatMap[seatNumber];
      item.attempts += 1;
      if (record.studentName && !item.names.includes(record.studentName)) {
        item.names.push(record.studentName);
      }
      if (record.paperTitle && !item.papers.includes(record.paperTitle)) {
        item.papers.push(record.paperTitle);
      }
      if (record.percent > item.bestPercent || record.correct > item.bestCorrect) {
        item.bestPercent = record.percent;
        item.bestCorrect = record.correct;
      }
      if (!item.latestAt || new Date(record.createdAt) > new Date(item.latestAt)) {
        item.latestAt = record.createdAt;
      }
    });
  });

  return Object.values(seatMap).sort((a, b) => toSeatSortValue(a.seatNumber) - toSeatSortValue(b.seatNumber));
}

function rowToRecord(row) {
  return {
    createdAt: toIsoString(row[0]),
    finishedAt: String(row[1] || ""),
    className: String(row[2] || ""),
    seatNumber: String(row[3] || ""),
    studentName: String(row[4] || ""),
    paperTitle: String(row[5] || ""),
    correct: toNumber(row[6]),
    total: toNumber(row[7]),
    percent: toNumber(row[8]),
  };
}

function splitSeatNumbers(value) {
  const text = String(value || "").trim();
  if (!text) return [];

  const separated = text
    .replace(/[,，、＋+&]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  if (separated.length > 1) return separated.map(normalizeSeatNumber);

  const digits = text.replace(/\D/g, "");
  if (digits.length === 4) {
    return [digits.slice(0, 2), digits.slice(2, 4)].map(normalizeSeatNumber);
  }
  return [normalizeSeatNumber(text)];
}

function normalizeSeatNumber(value) {
  const digits = String(value || "").replace(/\D/g, "");
  if (!digits) return String(value || "").trim();
  return String(Number(digits));
}

function toSeatSortValue(value) {
  const number = Number(String(value || "").replace(/\D/g, ""));
  return Number.isFinite(number) ? number : 9999;
}

function isTeacherAuthorized(key) {
  const teacherKey = PropertiesService.getScriptProperties().getProperty(TEACHER_KEY_PROPERTY);
  return Boolean(teacherKey && key && String(key) === teacherKey);
}

function getSheet() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  const firstRow = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  const needsHeaders = HEADERS.some((header, index) => firstRow[index] !== header);
  if (needsHeaders) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function output(payload, callback) {
  const json = JSON.stringify(payload);
  if (callback && /^[\w.$]+$/.test(callback)) {
    return ContentService
      .createTextOutput(`${callback}(${json});`)
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService
    .createTextOutput(json)
    .setMimeType(ContentService.MimeType.JSON);
}

function clean(value) {
  return String(value || "").trim().slice(0, 80);
}

function toNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

function toIsoString(value) {
  if (Object.prototype.toString.call(value) === "[object Date]") {
    return value.toISOString();
  }
  return String(value || "");
}
