// モデルの時は頭文字が大文字が一般的
const mong = require("mongoose");

// テーブル設計（idはmongoDB上で自動生成）
// データのCRUDが可能に
//　実態はインタラクションにより生成されている
const TaskSchema = new mong.Schema({
  name: {
    type: String,
    // nameは必ず入れないとエラーをはく
    required:[true, "タスク名を入れてください。"],
    // 空白削除（trimming）
    trim: true,
    maxlength:[20,"タスク名は20文字以内で入力してください。"]
  },
  completed: {
    type: Boolean,
    // nameは必ず入れないとエラーをはく
    default: false,
  },
});


// mongooseのTaskSchemeモデルをTaskという名前でexportしますよというもの。
module.exports = mong.model("Task", TaskSchema);