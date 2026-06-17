# Google Apps Script 共用排行榜

- Google Sheet: https://docs.google.com/spreadsheets/d/1rQ7_T27D72z-eZk0U3n-p4utZ50GPqoeeJY3g4ZqQS4/edit
- Web App URL: https://script.google.com/macros/s/AKfycbyctoOY03uZKvznm-je5NirX5JZkXixKEhqMc5UgbvEbnKM-AVnY7lS7fz5INjI_tiKig/exec

1. 建立 Google Sheet。
2. 在 Google Sheet 裡開啟 `擴充功能 > Apps Script`。
3. 將 `Code.gs` 的內容貼到 Apps Script 編輯器。
4. 部署為 Web App：
   - Execute as: `Me`
   - Who has access: `Anyone`
5. 複製 `/exec` 結尾的 Web App URL。
6. 將網站 `app/app.js` 裡的 `sharedLeaderboardUrl` 設為該 URL。

部署完成後，網站會把成績寫入 Google Sheet 的 `Records` 工作表，並讀取全班前五高分。

## 學生查詢自己的紀錄

網站會使用這個入口查詢學生自己的完整考卷紀錄：

```text
WEB_APP_URL?action=studentRecords&className=班級&seatNumber=座號
```

查詢規則：

- 班級需相同。
- 座號會支援共同作答格式，例如 `19 28`、`19、28`、`1928`。
- 最多回傳最近 30 筆紀錄。

## 教師查詢全部紀錄

`Code.gs` 支援一個教師用查詢入口：

```text
WEB_APP_URL?action=records&key=你的教師密碼
```

它會回傳：

- `records`：全部完整考卷作答紀錄
- `summary`：以座號整理後的摘要

共同作答的座號也會整理，例如：

- `19 28`
- `19、28`
- `1928`

都會拆成 `19` 和 `28` 兩個座號。

### 設定教師密碼

密碼不要寫進 GitHub。請在 Apps Script 裡設定 Script Property：

1. 打開 Apps Script 專案。
2. 左側點「專案設定」。
3. 找到「指令碼屬性」。
4. 新增屬性：
   - Property：`TEACHER_RECORDS_KEY`
   - Value：自己設定一組教師密碼
5. 儲存後重新部署 Web App。

設定完成後，教師查詢網址範例：

```text
https://script.google.com/macros/s/你的部署ID/exec?action=records&key=你的教師密碼
```
