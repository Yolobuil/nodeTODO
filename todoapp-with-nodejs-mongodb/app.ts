const express = require("express");
const app = express();
// 他ディレクトリからのインポート→requireでパスかライブラリ指定でOK（？）
const taskRoute = require("./routes/tasks");

const PORT:number = 5000;

// ルーティング設計
app.use("/api/v1/tasks/",taskRoute);

app.listen(PORT,console.log("server is running"));