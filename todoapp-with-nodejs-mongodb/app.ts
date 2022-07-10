const express = require("express");
const app = express();
// 他ディレクトリからのインポート→requireでパスかライブラリ指定でOK（？）
const taskRoute = require("./routes/tasks");

const connect = require('./db/connect');

app.use(express.json());
// publicを作って、index.htmlを使うように指示している
app.use(express.static("./public"));

// 下記の宣言（configメソッドでエンブファイルを取得できる）
require("dotenv").config();

const PORT:number = 5000;

// ルーティング設計
app.use("/api/v1/tasks/",taskRoute);

// データベースと接続(async awaitによる非同期処理)
// データの取得や更新は時間のかかる処理なため、非同期処理をした方が良い
const start = async () =>{
try{
  await connect(process.env.MONGO_URL);
  app.listen(PORT,console.log("server is running"));
}catch(err){
  console.log(err);
}

}

start();