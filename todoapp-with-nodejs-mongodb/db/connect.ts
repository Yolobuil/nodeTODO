// node.jsとmongodbをつなげるファイル
const mongoose = require("mongoose");

const connectDB = (url:string) => {
  // thenは非同期処理
  // サーバからDBにアクセスして情報を取得するのは非同期処理なため、connectが完了したらthenを実行する。
  return mongoose.connect(url)
  // WARNIGN:mongoDBかnode.jsのバージョンが古く、node.jsのバージョンを2.0.14　or earlierにしないと、エラーが起こるため注意
  .then(() => console.log("connecting database"))
  .catch((err:any) => console.log(err));
};

module.exports = connectDB;