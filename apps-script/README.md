# Google Apps Script 共用排行榜

- Google Sheet: https://docs.google.com/spreadsheets/d/1rQ7_T27D72z-eZk0U3n-p4utZ50GPqoeeJY3g4ZqQS4/edit
- Web App URL: https://script.google.com/macros/s/AKfycbxm38oR1qSymPzIf3aEeSjA7WNgQTIYSu19TLfARSB7LG0zkVf4xI7SiUUDvfMKbpuC-A/exec

1. 建立 Google Sheet。
2. 在 Google Sheet 裡開啟 `擴充功能 > Apps Script`。
3. 將 `Code.gs` 的內容貼到 Apps Script 編輯器。
4. 部署為 Web App：
   - Execute as: `Me`
   - Who has access: `Anyone`
5. 複製 `/exec` 結尾的 Web App URL。
6. 將網站 `app/app.js` 裡的 `sharedLeaderboardUrl` 設為該 URL。

部署完成後，網站會把成績寫入 Google Sheet 的 `Records` 工作表，並讀取全班前五高分。
