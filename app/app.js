const labels = ["A", "B", "C", "D", "E"];
const leaderboardKey = "trigPracticeLeaderboard";
const studentKey = "trigPracticeStudent";
const sharedLeaderboardUrl = "https://script.google.com/macros/s/AKfycbxm38oR1qSymPzIf3aEeSjA7WNgQTIYSu19TLfARSB7LG0zkVf4xI7SiUUDvfMKbpuC-A/exec";
const typeTitles = [
  "第 1 題：直角三角形求 cos",
  "第 2 題：已知 cos 求 tan",
  "第 3 題：已知 sin 求 cos",
  "第 4 題：直角三角形周長",
  "第 5 題：sin 與 cos 關係",
  "第 6 題：三角恆等式化簡",
  "第 7 題：已知 sinθcosθ",
  "第 8 題：同界角",
  "第 9 題：終邊點求 cos",
  "第 10 題：終邊點求 sin",
  "第 11 題：查表估 sin",
  "第 12 題：查表估 cos",
  "第 13 題：查表估 sin",
  "第 14 題：極座標轉直角坐標",
  "第 15 題：三角形面積",
  "第 16 題：餘弦定理",
  "第 17 題：外接圓半徑",
  "第 18 題：正弦定理承上題",
  "第 19 題：象限判斷多選",
];

const papers = [
  {
    id: "A",
    title: "練習卷 A",
    answers: ["C", "D", "A", "E", "B", "C", "E", "A", "B", "D", "B", "C", "D", "A", "B", "C", "D", "E", "AC"],
    questions: [
      ["在三角形 ABC 中，已知 ∠C 為直角，AB=17，BC=8，AC=15，下列何者為 cos A 之值？", ["8/15", "8/17", "15/17", "17/15", "15/8"]],
      ["已知 0°<θ<90°，且 cos θ=3/5，下列何者為 tan θ 之值？", ["3/4", "5/4", "3/5", "4/3", "4/5"]],
      ["已知 0°<θ<90°，且 sin θ=√2/2，下列何者為 cos θ 之值？", ["√2/2", "1/2", "√3/2", "0", "1"]],
      ["已知三角形 ABC 中，C 為直角，sin A=3/5 且 AB=20，下列何者為三角形的周長？", ["32", "36", "40", "44", "48"]],
      ["已知 sin θ=b 且 θ 為銳角，下列何者為 cos θ？", ["b", "√(1-b²)", "b/√(1-b²)", "√(1-b²)/b", "以上皆非"]],
      ["下列何者為 (sin θ+cos θ)²+(sin θ-cos θ)² 之值？", ["0", "1", "2", "3", "4"]],
      ["已知 sin θ cos θ=0.3，且 0<θ<90°，下列何者為 sin θ+cos θ？", ["√0.8", "√1", "√1.2", "√1.4", "√1.6"]],
      ["下列何者為 75° 的同界角？", ["435°", "-75°", "255°", "-435°", "315°"]],
      ["已知點 P(5,-12) 在標準位置角 θ 的終邊上，下列何者為 cos θ？", ["12/13", "5/13", "-12/13", "-5/13", "-5/12"]],
      ["已知點 P(-8,15) 在標準位置角 θ 的終邊上，下列何者為 sin θ？", ["8/17", "-8/17", "-15/17", "15/17", "-15/8"]],
      ["下表為部分三角函數的估計值：sin10°=0.17，sin20°=0.34，sin30°=0.50，sin40°=0.64，sin50°=0.77，sin60°=0.87，sin70°=0.94，sin80°=0.98。下列選項何者為 sin 320° 估計至小數點第二位之值？", ["0.64", "-0.64", "0.77", "-0.77"]],
      ["依上表，下列選項何者為 cos 650° 估計至小數點第二位之值？", ["0.17", "-0.17", "0.34", "-0.34"]],
      ["依上表，下列選項何者為 sin 210° 估計至小數點第二位之值？", ["0.50", "0.87", "-0.87", "-0.50"]],
      ["已知 P 點的極座標為 [50,300°]，下列哪一個直角坐標最接近 P 點？", ["(25,-43)", "(-25,43)", "(43,-25)", "(-43,25)"]],
      ["已知在三角形 ABC 中，AB=10，BC=9，sin B=2/5，則三角形 ABC 的面積是多少？", ["12", "18", "24", "30"]],
      ["已知在三角形 ABC 中，AB=10，BC=6，cos B=1/5，則 AC 的長度是多少？", ["√102", "√108", "√112", "√118", "√124"]],
      ["已知在三角形 ABC 中，AB=10，BC=15，sin C=1/2，三角形 ABC 的外接圓半徑為何？", ["5", "8", "9", "10", "12"]],
      ["承上題，在三角形 ABC 中，sin A 是多少？", ["1/3", "1/2", "2/3", "5/6", "3/4"]],
      ["已知 θ 為第二象限角，下列敘述哪些正確？", ["sin θ>0", "cos θ>0", "tan θ<0", "sin(-θ)>0", "cos(-θ)>0"], true],
    ],
  },
  {
    id: "B",
    title: "練習卷 B",
    answers: ["A", "E", "B", "D", "C", "D", "A", "B", "C", "E", "D", "C", "B", "A", "B", "D", "A", "E", "BC"],
    questions: [
      ["在三角形 ABC 中，已知 ∠C 為直角，AB=25，BC=7，AC=24，下列何者為 cos A 之值？", ["24/25", "7/25", "25/24", "7/24", "24/7"]],
      ["已知 0°<θ<90°，且 cos θ=5/13，下列何者為 tan θ 之值？", ["5/12", "13/12", "5/13", "12/13", "12/5"]],
      ["已知 0°<θ<90°，且 sin θ=√3/2，下列何者為 cos θ 之值？", ["0", "1/2", "√2/2", "√3/2", "1"]],
      ["已知三角形 ABC 中，C 為直角，sin A=5/13 且 AB=26，下列何者為三角形的周長？", ["36", "48", "52", "60", "72"]],
      ["已知 sin θ=c 且 θ 為銳角，下列何者為 cos θ？", ["c", "c/√(1-c²)", "√(1-c²)", "√(1-c²)/c", "以上皆非"]],
      ["下列何者為 (sin θ+cos θ)²+(sin θ-cos θ)² 之值？", ["0", "1", "3", "2", "4"]],
      ["已知 sin θ cos θ=0.1，且 0<θ<90°，下列何者為 sin θ+cos θ？", ["√1.2", "√1.4", "√1.6", "√0.8", "√1"]],
      ["下列何者為 210° 的同界角？", ["150°", "-150°", "-210°", "30°", "390°"]],
      ["已知點 P(-4,-3) 在標準位置角 θ 的終邊上，下列何者為 cos θ？", ["3/5", "-3/5", "-4/5", "4/5", "-3/4"]],
      ["已知點 P(6,-8) 在標準位置角 θ 的終邊上，下列何者為 sin θ？", ["3/5", "-3/5", "4/5", "6/10", "-4/5"]],
      ["下表為部分三角函數的估計值：sin10°=0.17，sin20°=0.34，sin30°=0.50，sin40°=0.64，sin50°=0.77，sin60°=0.87，sin70°=0.94，sin80°=0.98。下列選項何者為 sin 300° 估計至小數點第二位之值？", ["0.87", "-0.77", "0.50", "-0.87"]],
      ["依上表，下列選項何者為 cos 400° 估計至小數點第二位之值？", ["0.64", "-0.64", "0.77", "-0.77"]],
      ["依上表，下列選項何者為 sin 250° 估計至小數點第二位之值？", ["0.94", "-0.94", "0.34", "-0.34"]],
      ["已知 P 點的極座標為 [80,150°]，下列哪一個直角坐標最接近 P 點？", ["(-69,40)", "(69,-40)", "(-40,69)", "(40,-69)"]],
      ["已知在三角形 ABC 中，AB=14，BC=10，sin B=3/7，則三角形 ABC 的面積是多少？", ["24", "30", "36", "42"]],
      ["已知在三角形 ABC 中，AB=14，BC=10，cos B=2/5，則 AC 的長度是多少？", ["√164", "√174", "√180", "√184", "√194"]],
      ["已知在三角形 ABC 中，AB=16，BC=20，sin C=4/5，三角形 ABC 的外接圓半徑為何？", ["10", "12", "16", "18", "20"]],
      ["承上題，在三角形 ABC 中，sin A 是多少？", ["1/2", "3/5", "4/5", "5/6", "1"]],
      ["已知 θ 為第三象限角，下列敘述哪些正確？", ["sin θ>0", "cos θ<0", "tan θ>0", "sin(-θ)<0", "cos(-θ)>0"], true],
    ],
  },
  {
    id: "C",
    title: "練習卷 C",
    answers: ["D", "A", "E", "B", "A", "E", "C", "B", "C", "A", "D", "B", "C", "E", "C", "D", "A", "B", "BE"],
    questions: [
      ["在三角形 ABC 中，已知 ∠C 為直角，AB=10，BC=6，AC=8，下列何者為 cos A 之值？", ["3/5", "5/4", "6/10", "4/5", "8/6"]],
      ["已知 0°<θ<90°，且 cos θ=12/13，下列何者為 tan θ 之值？", ["5/12", "12/5", "13/5", "5/13", "12/13"]],
      ["已知 0°<θ<90°，且 sin θ=3/5，下列何者為 cos θ 之值？", ["3/5", "5/3", "5/4", "√3/2", "4/5"]],
      ["已知三角形 ABC 中，C 為直角，sin A=4/5 且 AB=15，下列何者為三角形的周長？", ["30", "36", "39", "42", "45"]],
      ["已知 sin θ=d 且 θ 為銳角，下列何者為 cos θ？", ["√(1-d²)", "d", "d/√(1-d²)", "√(1-d²)/d", "以上皆非"]],
      ["下列何者為 (sin θ+cos θ)²+(sin θ-cos θ)² 之值？", ["0", "1", "3", "4", "2"]],
      ["已知 sin θ cos θ=0.4，且 0<θ<90°，下列何者為 sin θ+cos θ？", ["√1.2", "√1.4", "√1.8", "√0.8", "√1"]],
      ["下列何者為 315° 的同界角？", ["45°", "-45°", "135°", "-315°", "615°"]],
      ["已知點 P(8,15) 在標準位置角 θ 的終邊上，下列何者為 cos θ？", ["15/17", "-15/17", "8/17", "-8/17", "8/15"]],
      ["已知點 P(-5,-12) 在標準位置角 θ 的終邊上，下列何者為 sin θ？", ["-12/13", "12/13", "-5/13", "5/13", "-12/5"]],
      ["下表為部分三角函數的估計值：sin10°=0.17，sin20°=0.34，sin30°=0.50，sin40°=0.64，sin50°=0.77，sin60°=0.87，sin70°=0.94，sin80°=0.98。下列選項何者為 sin 340° 估計至小數點第二位之值？", ["0.34", "-0.64", "0.64", "-0.34"]],
      ["依上表，下列選項何者為 cos 610° 估計至小數點第二位之值？", ["0.34", "-0.34", "0.94", "-0.94"]],
      ["依上表，下列選項何者為 sin 140° 估計至小數點第二位之值？", ["0.50", "-0.50", "0.64", "-0.64"]],
      ["已知 P 點的極座標為 [60,220°]，下列哪一個直角坐標最接近 P 點？", ["(46,39)", "(-39,-46)", "(39,46)", "(46,-39)", "(-46,-39)"]],
      ["已知在三角形 ABC 中，AB=16，BC=9，sin B=1/4，則三角形 ABC 的面積是多少？", ["12", "16", "18", "24"]],
      ["已知在三角形 ABC 中，AB=16，BC=9，cos B=1/3，則 AC 的長度是多少？", ["√211", "√221", "√231", "√241", "√251"]],
      ["已知在三角形 ABC 中，AB=18，BC=24，sin C=3/4，三角形 ABC 的外接圓半徑為何？", ["12", "16", "18", "20", "24"]],
      ["承上題，在三角形 ABC 中，sin A 是多少？", ["3/4", "1", "2/3", "1/2", "4/5"]],
      ["已知 θ 為第四象限角，下列敘述哪些正確？", ["sin θ>0", "cos θ>0", "tan θ>0", "sin(-θ)<0", "cos(-θ)>0"], true],
    ],
  },
  {
    id: "D",
    title: "練習卷 D",
    answers: ["B", "E", "C", "E", "D", "B", "D", "C", "D", "E", "C", "D", "A", "B", "C", "B", "B", "E", "AB"],
    questions: [
      ["在三角形 ABC 中，已知 ∠C 為直角，AB=13，BC=5，AC=12，下列何者為 cos A 之值？", ["5/13", "12/13", "13/12", "5/12", "12/5"]],
      ["已知 0°<θ<90°，且 cos θ=8/17，下列何者為 tan θ 之值？", ["8/15", "17/15", "8/17", "15/17", "15/8"]],
      ["已知 0°<θ<90°，且 sin θ=1/2，下列何者為 cos θ 之值？", ["1/2", "√2/2", "√3/2", "0", "1"]],
      ["已知三角形 ABC 中，C 為直角，sin A=7/25 且 AB=50，下列何者為三角形的周長？", ["64", "88", "100", "104", "112"]],
      ["已知 sin θ=e 且 θ 為銳角，下列何者為 cos θ？", ["e", "e/√(1-e²)", "√(1-e²)/e", "√(1-e²)", "以上皆非"]],
      ["下列何者為 (sin θ+cos θ)²+(sin θ-cos θ)² 之值？", ["1", "2", "3", "4", "0"]],
      ["已知 sin θ cos θ=0.2，且 0<θ<90°，下列何者為 sin θ+cos θ？", ["√0.8", "√1", "√1.2", "√1.4", "√1.6"]],
      ["下列何者為 120° 的同界角？", ["240°", "-120°", "480°", "-480°", "300°"]],
      ["已知點 P(-12,5) 在標準位置角 θ 的終邊上，下列何者為 cos θ？", ["5/13", "12/13", "-5/13", "-12/13", "-12/5"]],
      ["已知點 P(9,-40) 在標準位置角 θ 的終邊上，下列何者為 sin θ？", ["9/41", "-9/41", "40/41", "41/40", "-40/41"]],
      ["下表為部分三角函數的估計值：sin10°=0.17，sin20°=0.34，sin30°=0.50，sin40°=0.64，sin50°=0.77，sin60°=0.87，sin70°=0.94，sin80°=0.98。下列選項何者為 sin 310° 估計至小數點第二位之值？", ["0.77", "-0.64", "-0.77", "0.64"]],
      ["依上表，下列選項何者為 cos 560° 估計至小數點第二位之值？", ["0.94", "-0.17", "0.17", "-0.94"]],
      ["依上表，下列選項何者為 sin 150° 估計至小數點第二位之值？", ["0.50", "-0.50", "0.87", "-0.87"]],
      ["已知 P 點的極座標為 [40,240°]，下列哪一個直角坐標最接近 P 點？", ["(20,35)", "(-20,-35)", "(-35,-20)", "(35,-20)"]],
      ["已知在三角形 ABC 中，AB=12，BC=15，sin B=1/3，則三角形 ABC 的面積是多少？", ["18", "24", "30", "36"]],
      ["已知在三角形 ABC 中，AB=12，BC=8，cos B=1/4，則 AC 的長度是多少？", ["√144", "√160", "√176", "√192", "√208"]],
      ["已知在三角形 ABC 中，AB=12，BC=18，sin C=3/5，三角形 ABC 的外接圓半徑為何？", ["8", "10", "12", "15", "18"]],
      ["承上題，在三角形 ABC 中，sin A 是多少？", ["3/5", "2/3", "3/4", "4/5", "9/10"]],
      ["已知 θ 為第一象限角，下列敘述哪些正確？", ["sin θ>0", "cos θ>0", "tan θ<0", "sin(-θ)>0", "cos(-θ)<0"], true],
    ],
  },
  {
    id: "E",
    title: "練習卷 E",
    answers: ["A", "D", "B", "C", "E", "A", "E", "A", "A", "B", "D", "B", "C", "A", "B", "E", "B", "D", "AB"],
    questions: [
      ["在三角形 ABC 中，已知 ∠C 為直角，AB=29，BC=20，AC=21，下列何者為 cos A 之值？", ["21/29", "20/29", "29/21", "20/21", "21/20"]],
      ["已知 0°<θ<90°，且 cos θ=7/25，下列何者為 tan θ 之值？", ["7/24", "25/24", "7/25", "24/7", "24/25"]],
      ["已知 0°<θ<90°，且 sin θ=√3/2，下列何者為 cos θ 之值？", ["√3/2", "1/2", "√2/2", "0", "1"]],
      ["已知三角形 ABC 中，C 為直角，sin A=8/17 且 AB=34，下列何者為三角形的周長？", ["48", "64", "80", "96", "112"]],
      ["已知 sin θ=f 且 θ 為銳角，下列何者為 cos θ？", ["f", "f/√(1-f²)", "√(1-f²)/f", "以上皆非", "√(1-f²)"]],
      ["下列何者為 (sin θ+cos θ)²+(sin θ-cos θ)² 之值？", ["2", "1", "3", "4", "0"]],
      ["已知 sin θ cos θ=0.45，且 0<θ<90°，下列何者為 sin θ+cos θ？", ["√1.1", "√1.3", "√1.5", "√1.7", "√1.9"]],
      ["下列何者為 285° 的同界角？", ["-75°", "75°", "-285°", "105°", "615°"]],
      ["已知點 P(7,24) 在標準位置角 θ 的終邊上，下列何者為 cos θ？", ["7/25", "24/25", "-7/25", "-24/25", "7/24"]],
      ["已知點 P(-15,8) 在標準位置角 θ 的終邊上，下列何者為 sin θ？", ["-15/17", "8/17", "-8/17", "15/17", "8/15"]],
      ["下表為部分三角函數的估計值：sin10°=0.17，sin20°=0.34，sin30°=0.50，sin40°=0.64，sin50°=0.77，sin60°=0.87，sin70°=0.94，sin80°=0.98。下列選項何者為 sin 330° 估計至小數點第二位之值？", ["0.50", "0.87", "-0.87", "-0.50"]],
      ["依上表，下列選項何者為 cos 620° 估計至小數點第二位之值？", ["0.17", "-0.17", "0.94", "-0.94"]],
      ["依上表，下列選項何者為 sin 120° 估計至小數點第二位之值？", ["0.50", "-0.50", "0.87", "-0.87"]],
      ["已知 P 點的極座標為 [70,330°]，下列哪一個直角坐標最接近 P 點？", ["(61,-35)", "(-61,35)", "(35,-61)", "(-35,61)"]],
      ["已知在三角形 ABC 中，AB=18，BC=10，sin B=2/5，則三角形 ABC 的面積是多少？", ["24", "36", "42", "48"]],
      ["已知在三角形 ABC 中，AB=18，BC=10，cos B=3/5，則 AC 的長度是多少？", ["√168", "√188", "√198", "√204", "√208"]],
      ["已知在三角形 ABC 中，AB=20，BC=24，sin C=5/8，三角形 ABC 的外接圓半徑為何？", ["12", "16", "18", "20", "24"]],
      ["承上題，在三角形 ABC 中，sin A 是多少？", ["1/2", "5/8", "2/3", "3/4", "4/5"]],
      ["已知 θ 為第三象限角，下列敘述哪些正確？", ["sin θ<0", "cos θ<0", "tan θ<0", "sin(-θ)<0", "cos(-θ)>0"], true],
    ],
  },
];

const state = {
  paperIndex: 0,
  typeIndex: 0,
  mode: "paper",
  graded: false,
  typeGraded: false,
  paperScoreText: "尚未批改",
  typeScoreText: "題型練習",
  wrongOnly: false,
};

const studentForm = document.querySelector("#studentForm");
const classInput = document.querySelector("#classInput");
const seatInput = document.querySelector("#seatInput");
const nameInput = document.querySelector("#nameInput");
const studentStatus = document.querySelector("#studentStatus");
const studentNotice = document.querySelector("#studentNotice");
const paperView = document.querySelector("#paperView");
const typePracticeView = document.querySelector("#typePracticeView");
const paperModeBtn = document.querySelector("#paperModeBtn");
const typeModeBtn = document.querySelector("#typeModeBtn");
const paperSelect = document.querySelector("#paperSelect");
const typeSelect = document.querySelector("#typeSelect");
const quizForm = document.querySelector("#quizForm");
const typePracticeForm = document.querySelector("#typePracticeForm");
const scorePill = document.querySelector("#scorePill");
const progressText = document.querySelector("#progressText");
const progressFill = document.querySelector("#progressFill");
const typeProgressText = document.querySelector("#typeProgressText");
const typeProgressFill = document.querySelector("#typeProgressFill");
const resultPanel = document.querySelector("#resultPanel");
const typeResultPanel = document.querySelector("#typeResultPanel");
const leaderboardList = document.querySelector("#leaderboardList");
const clearLeaderboardBtn = document.querySelector("#clearLeaderboardBtn");
const resetBtn = document.querySelector("#resetBtn");
const gradeBtn = document.querySelector("#gradeBtn");
const showWrongBtn = document.querySelector("#showWrongBtn");
const typeResetBtn = document.querySelector("#typeResetBtn");
const typeGradeBtn = document.querySelector("#typeGradeBtn");
const typeNewBtn = document.querySelector("#typeNewBtn");

function answerKey(answer) {
  return answer.split("").sort().join("");
}

function selectedAnswer(questionIndex) {
  const inputs = [...quizForm.querySelectorAll(`[name="q${questionIndex}"]:checked`)];
  return inputs.map((input) => input.value).sort().join("");
}

function selectedTypeAnswer(questionIndex) {
  const inputs = [...typePracticeForm.querySelectorAll(`[name="t${questionIndex}"]:checked`)];
  return inputs.map((input) => input.value).sort().join("");
}

function currentPaper() {
  return papers[state.paperIndex];
}

function currentTypeQuestions() {
  return papers.map((paper) => ({
    paperTitle: paper.title,
    question: paper.questions[state.typeIndex],
    answer: paper.answers[state.typeIndex],
  }));
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getStudent() {
  return {
    className: classInput.value.trim(),
    seatNumber: seatInput.value.trim(),
    studentName: nameInput.value.trim(),
  };
}

function isStudentReady(student = getStudent()) {
  return Boolean(student.className && student.seatNumber && student.studentName);
}

function updateStudentStatus() {
  const ready = isStudentReady();
  studentStatus.textContent = ready ? "已填寫" : "尚未填寫";
  studentStatus.classList.toggle("is-ready", ready);
  if (ready) {
    studentNotice.hidden = true;
    localStorage.setItem(studentKey, JSON.stringify(getStudent()));
  }
}

function loadStudent() {
  try {
    const saved = JSON.parse(localStorage.getItem(studentKey));
    if (!saved) return;
    classInput.value = saved.className || "";
    seatInput.value = saved.seatNumber || "";
    nameInput.value = saved.studentName || "";
  } catch {
    localStorage.removeItem(studentKey);
  }
  updateStudentStatus();
}

function loadLeaderboard() {
  try {
    return JSON.parse(localStorage.getItem(leaderboardKey)) || [];
  } catch {
    localStorage.removeItem(leaderboardKey);
    return [];
  }
}

function saveLeaderboard(records) {
  localStorage.setItem(leaderboardKey, JSON.stringify(records));
}

function hasSharedLeaderboard() {
  return Boolean(sharedLeaderboardUrl.trim());
}

function requestSharedLeaderboard(params = {}) {
  return new Promise((resolve, reject) => {
    const callbackName = `leaderboardCallback_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const script = document.createElement("script");
    const url = new URL(sharedLeaderboardUrl);
    Object.entries({ ...params, callback: callbackName }).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });

    window[callbackName] = (data) => {
      delete window[callbackName];
      script.remove();
      resolve(data);
    };
    script.onerror = () => {
      delete window[callbackName];
      script.remove();
      reject(new Error("shared leaderboard request failed"));
    };
    script.src = url.toString();
    document.body.appendChild(script);
  });
}

async function loadSharedLeaderboard() {
  if (!hasSharedLeaderboard()) return loadLeaderboard();
  try {
    const data = await requestSharedLeaderboard({ action: "leaderboard" });
    if (data && data.ok && Array.isArray(data.records)) {
      return data.records;
    }
  } catch {
    return loadLeaderboard();
  }
  return loadLeaderboard();
}

async function renderLeaderboard(records) {
  const leaderboardRecords = records || await loadSharedLeaderboard();
  if (!leaderboardRecords.length) {
    leaderboardList.innerHTML = `<li class="empty-rank">尚無紀錄，完成一次批改後會出現在這裡。</li>`;
    return;
  }

  leaderboardList.innerHTML = leaderboardRecords.map((record, index) => `
    <li>
      <span class="rank-num">#${index + 1}</span>
      <span class="rank-main">
        <span class="rank-name">${escapeHtml(record.studentName)}</span>
        <span class="rank-meta">${escapeHtml(record.className)} ${escapeHtml(record.seatNumber)} 號｜${escapeHtml(record.paperTitle)}｜${escapeHtml(record.finishedAt)}</span>
      </span>
      <span class="rank-score">${record.percent} 分</span>
    </li>
  `).join("");
}

async function addLeaderboardRecord(record) {
  if (hasSharedLeaderboard()) {
    try {
      const data = await requestSharedLeaderboard({ action: "submit", ...record });
      if (data && data.ok && Array.isArray(data.records)) {
        await renderLeaderboard(data.records);
        return;
      }
    } catch {
      // Keep a local backup when the shared leaderboard is temporarily unreachable.
    }
  }

  const records = loadLeaderboard();
  records.push(record);
  records.sort((a, b) => {
    if (b.percent !== a.percent) return b.percent - a.percent;
    if (b.correct !== a.correct) return b.correct - a.correct;
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
  saveLeaderboard(records.slice(0, 5));
  await renderLeaderboard(records.slice(0, 5));
}

function updateLeaderboardButton() {
  clearLeaderboardBtn.textContent = hasSharedLeaderboard() ? "重新整理" : "清除紀錄";
}

function setMode(mode) {
  state.mode = mode;
  const isTypePractice = mode === "type";
  paperView.hidden = isTypePractice;
  typePracticeView.hidden = !isTypePractice;
  paperModeBtn.classList.toggle("is-active", !isTypePractice);
  typeModeBtn.classList.toggle("is-active", isTypePractice);
  scorePill.textContent = isTypePractice ? state.typeScoreText : state.paperScoreText;
}

function renderPaperOptions() {
  paperSelect.innerHTML = papers
    .map((paper, index) => `<option value="${index}">${paper.title}</option>`)
    .join("");
}

function renderTypeOptions() {
  typeSelect.innerHTML = typeTitles
    .map((title, index) => `<option value="${index}">${title}</option>`)
    .join("");
}

function renderQuiz() {
  const paper = currentPaper();
  quizForm.innerHTML = paper.questions.map((question, index) => {
    const [stem, options, multiple] = question;
    const type = multiple ? "多選" : "單選";
    const inputType = multiple ? "checkbox" : "radio";
    const optionHtml = options.map((option, optionIndex) => {
      const label = labels[optionIndex];
      return `
        <label class="option">
          <input type="${inputType}" name="q${index}" value="${label}">
          <span>(${label}) ${option}</span>
        </label>
      `;
    }).join("");

    return `
      <article class="question" data-question="${index}">
        <div class="q-head">
          <span class="q-num">第 ${index + 1} 題</span>
          <span class="q-type">${type}</span>
        </div>
        <p class="stem">${stem}</p>
        <div class="options">${optionHtml}</div>
        <div class="feedback" hidden></div>
      </article>
    `;
  }).join("");
  state.graded = false;
  state.wrongOnly = false;
  showWrongBtn.textContent = "只看錯題";
  resultPanel.hidden = true;
  state.paperScoreText = "尚未批改";
  scorePill.textContent = state.paperScoreText;
  updateProgress();
}

function renderTypePractice() {
  const typeQuestions = currentTypeQuestions();
  typePracticeForm.innerHTML = typeQuestions.map((item, index) => {
    const [stem, options, multiple] = item.question;
    const type = multiple ? "多選" : "單選";
    const inputType = multiple ? "checkbox" : "radio";
    const optionHtml = options.map((option, optionIndex) => {
      const label = labels[optionIndex];
      return `
        <label class="option">
          <input type="${inputType}" name="t${index}" value="${label}">
          <span>(${label}) ${option}</span>
        </label>
      `;
    }).join("");

    return `
      <article class="question" data-type-question="${index}">
        <div class="q-head">
          <span class="q-num">${item.paperTitle} 變式</span>
          <span class="q-type">${type}</span>
        </div>
        <p class="stem">${stem}</p>
        <div class="options">${optionHtml}</div>
        <div class="feedback" hidden></div>
      </article>
    `;
  }).join("");
  state.typeGraded = false;
  typeResultPanel.hidden = true;
  state.typeScoreText = "題型練習";
  if (state.mode === "type") {
    scorePill.textContent = state.typeScoreText;
  }
  updateTypeProgress();
}

function updateProgress() {
  const paper = currentPaper();
  const answered = paper.questions.filter((_, index) => selectedAnswer(index)).length;
  progressText.textContent = `${answered} / ${paper.questions.length} 題`;
  progressFill.style.width = `${Math.round((answered / paper.questions.length) * 100)}%`;
}

function updateTypeProgress() {
  const typeQuestions = currentTypeQuestions();
  const answered = typeQuestions.filter((_, index) => selectedTypeAnswer(index)).length;
  typeProgressText.textContent = `${answered} / ${typeQuestions.length} 題`;
  typeProgressFill.style.width = `${Math.round((answered / typeQuestions.length) * 100)}%`;
}

function gradeQuiz() {
  const student = getStudent();
  if (!isStudentReady(student)) {
    studentNotice.hidden = false;
    studentForm.reportValidity();
    return;
  }

  const paper = currentPaper();
  const wasGraded = state.graded;
  let correct = 0;
  const wrong = [];

  paper.questions.forEach((question, index) => {
    const expected = answerKey(paper.answers[index]);
    const selected = selectedAnswer(index);
    const article = quizForm.querySelector(`[data-question="${index}"]`);
    const feedback = article.querySelector(".feedback");
    const isCorrect = selected === expected;
    article.classList.toggle("is-correct", isCorrect);
    article.classList.toggle("is-wrong", !isCorrect);
    feedback.hidden = false;
    feedback.className = `feedback ${isCorrect ? "good" : "bad"}`;
    feedback.textContent = isCorrect
      ? `答對了。正解：${paper.answers[index]}`
      : `再看一次。你的答案：${selected || "未作答"}；正解：${paper.answers[index]}`;
    if (isCorrect) {
      correct += 1;
    } else {
      wrong.push(index + 1);
    }
  });

  state.graded = true;
  const percent = Math.round((correct / paper.questions.length) * 100);
  const createdAt = new Date();
  state.paperScoreText = `${percent} 分`;
  scorePill.textContent = state.paperScoreText;
  resultPanel.hidden = false;
  resultPanel.innerHTML = `
    <h2>${paper.title} 批改結果</h2>
    <p>${escapeHtml(student.className)} ${escapeHtml(student.seatNumber)} 號 ${escapeHtml(student.studentName)}</p>
    <p>答對 ${correct} 題，共 ${paper.questions.length} 題，換算 ${percent} 分。</p>
    <p>${wrong.length ? `錯題：第 ${wrong.join("、")} 題` : "全部答對，這張很漂亮。"}</p>
  `;
  if (!wasGraded) {
    addLeaderboardRecord({
      ...student,
      paperTitle: paper.title,
      correct,
      total: paper.questions.length,
      percent,
      createdAt: createdAt.toISOString(),
      finishedAt: createdAt.toLocaleString("zh-TW", {
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
  }
  applyWrongFilter();
}

function resetQuiz() {
  quizForm.reset();
  [...quizForm.querySelectorAll(".question")].forEach((article) => {
    article.classList.remove("is-correct", "is-wrong", "hidden-by-filter");
    article.querySelector(".feedback").hidden = true;
  });
  state.graded = false;
  state.wrongOnly = false;
  showWrongBtn.textContent = "只看錯題";
  resultPanel.hidden = true;
  state.paperScoreText = "尚未批改";
  scorePill.textContent = state.paperScoreText;
  updateProgress();
}

function gradeTypePractice() {
  const typeQuestions = currentTypeQuestions();
  let correct = 0;
  const wrong = [];

  typeQuestions.forEach((item, index) => {
    const expected = answerKey(item.answer);
    const selected = selectedTypeAnswer(index);
    const article = typePracticeForm.querySelector(`[data-type-question="${index}"]`);
    const feedback = article.querySelector(".feedback");
    const isCorrect = selected === expected;
    article.classList.toggle("is-correct", isCorrect);
    article.classList.toggle("is-wrong", !isCorrect);
    feedback.hidden = false;
    feedback.className = `feedback ${isCorrect ? "good" : "bad"}`;
    feedback.textContent = isCorrect
      ? `答對了。正解：${item.answer}`
      : `再看一次。你的答案：${selected || "未作答"}；正解：${item.answer}`;
    if (isCorrect) {
      correct += 1;
    } else {
      wrong.push(index + 1);
    }
  });

  state.typeGraded = true;
  const percent = Math.round((correct / typeQuestions.length) * 100);
  state.typeScoreText = `${percent} 分`;
  scorePill.textContent = state.typeScoreText;
  typeResultPanel.hidden = false;
  typeResultPanel.innerHTML = `
    <h2>${escapeHtml(typeTitles[state.typeIndex])} 結果</h2>
    <p>答對 ${correct} 題，共 ${typeQuestions.length} 題，換算 ${percent} 分。</p>
    <p>${wrong.length ? `需要再看：第 ${wrong.join("、")} 題` : "這個題型已經很穩。"}</p>
  `;
}

function resetTypePractice() {
  typePracticeForm.reset();
  [...typePracticeForm.querySelectorAll(".question")].forEach((article) => {
    article.classList.remove("is-correct", "is-wrong");
    article.querySelector(".feedback").hidden = true;
  });
  state.typeGraded = false;
  typeResultPanel.hidden = true;
  state.typeScoreText = "題型練習";
  scorePill.textContent = state.typeScoreText;
  updateTypeProgress();
}

function applyWrongFilter() {
  [...quizForm.querySelectorAll(".question")].forEach((article) => {
    const hide = state.wrongOnly && !article.classList.contains("is-wrong");
    article.classList.toggle("hidden-by-filter", hide);
  });
}

paperSelect.addEventListener("change", () => {
  state.paperIndex = Number(paperSelect.value);
  renderQuiz();
});

typeSelect.addEventListener("change", () => {
  state.typeIndex = Number(typeSelect.value);
  renderTypePractice();
});

paperModeBtn.addEventListener("click", () => setMode("paper"));
typeModeBtn.addEventListener("click", () => setMode("type"));
studentForm.addEventListener("input", updateStudentStatus);
quizForm.addEventListener("change", updateProgress);
typePracticeForm.addEventListener("change", updateTypeProgress);
resetBtn.addEventListener("click", resetQuiz);
gradeBtn.addEventListener("click", gradeQuiz);
typeResetBtn.addEventListener("click", resetTypePractice);
typeGradeBtn.addEventListener("click", gradeTypePractice);
typeNewBtn.addEventListener("click", () => setMode("paper"));
showWrongBtn.addEventListener("click", () => {
  if (!state.graded) {
    gradeQuiz();
    if (!state.graded) return;
  }
  state.wrongOnly = !state.wrongOnly;
  showWrongBtn.textContent = state.wrongOnly ? "顯示全部" : "只看錯題";
  applyWrongFilter();
});
clearLeaderboardBtn.addEventListener("click", async () => {
  if (hasSharedLeaderboard()) {
    await renderLeaderboard();
    return;
  }
  localStorage.removeItem(leaderboardKey);
  await renderLeaderboard([]);
});

loadStudent();
renderPaperOptions();
renderTypeOptions();
renderQuiz();
renderTypePractice();
updateLeaderboardButton();
renderLeaderboard();
