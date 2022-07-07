// routesはルート設計のためだけのファイル（アルゴリズムを書くと煩雑に・・・）
const expressRouter = require("express");
const router = expressRouter.Router();
const taskApi = require("../controllers/tasks");

// v1はバージョン１（エンドポイントを変えたり変えていく予定がある場合はv２などに変更する。）
// アップデート予定がなければ/api/tasksでOK　
router.get("/", taskApi.getAllTasks);

router.post("/", taskApi.createTask);

router.get("/:id", taskApi.getSingleTask);

router.patch("/:id", taskApi.updateTask);

router.delete("/:id", taskApi.deleteTask);

module.exports = router;