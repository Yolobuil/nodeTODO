const getAllTasks = (req:any,res:any) => {
    res.send("タスクを全て取得しました。");
}

const createTask = (req:any,res:any) => {
  res.send("タスクを新規作成しました。");
}

const getSingleTask = (req:any,res:any) => {
  res.send("ある特定のタスクを取得しました。");
}

const updateTask = (req:any,res:any) => {
  res.send("ある特定のタスクを更新しました。");
}

const deleteTask = (req:any,res:any) => {
 res.send("ある特定のタスクを削除しました。");
}

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};