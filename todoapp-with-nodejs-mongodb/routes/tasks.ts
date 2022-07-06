
const expressRouter = require("express");
const router = expressRouter.Router();

// v1はバージョン１（エンドポイントを変えたり変えていく予定がある場合はv２などに変更する。）
// アップデート予定がなければ/api/tasksでOK　
router.get("/", (req:any,res:any) => {
  res.send("タスクを全て取得しました。");
});

router.post("/", (req:any,res:any) => {
  res.send("タスクを新規作成しました。");
});

router.get("/:id", (req:any,res:any) => {
  res.send("ある特定のタスクを取得しました。");
});

router.patch("/:id", (req:any,res:any) => {
  res.send("ある特定のタスクを更新しました。");
});

router.delete("/:id", (req:any,res:any) => {
  res.send("ある特定のタスクを削除しました。");
});

module.exports = router;