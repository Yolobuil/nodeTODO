// divタグのtasksの要素を取得（class名を指定する）
const tasksDOM = document.querySelector(".tasks");
// HTMLファイル内ではtsファイルは読み込めないっぽい？（実行ファイルじゃないから？）
// because its MIME type ('video/mp2t') is not executable.
// /api/v1/tasksからタスクを読みこむ
// axiosを使用して、エンドポイントにアクセスできればOK
const showTasks = async () => {
try{
const {data:tasks} = await axios.get("/api/v1/tasks");

// タスクを出力する
const allTasks = tasks.map((task) => {
  // 一つ一つ取り出す
  const {completed,_id,name} = task;

  // バッククウォテーション
  return `<div class="single-task">
  <h5>
    <span><i class="far fa-check-circle"></i></span>${name}
  </h5>
  <div class="task-links">
  <!-- 編集リンク -->
  <a href="#" class="edit-link">
    <i class="fas fa-edit"></i>
  </a>
  <!-- ゴミ箱button -->
  <button type="button" class="delete-btn">
      <i class="fas fa-trash"></i>
  </button>
</div>
  </div>`;
// join（””）によって配列の区切りをなくし、連結することができる。
}).join("");
tasksDOM.innerHTML = allTasks;
}catch(err){
  console.log(err);
}
};

showTasks();
