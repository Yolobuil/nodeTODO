// divタグのtasksの要素を取得（class名を指定する）
const tasksDOM = document.querySelector(".tasks");
const formDOM = document.querySelector(".task-form");
const taskInputDOM = document.querySelector(".task-input");
const formAlertDOM = document.querySelector(".form-alert");
// HTMLファイル内ではtsファイルは読み込めないっぽい？（実行ファイルじゃないから？）
// because its MIME type ('video/mp2t') is not executable.
// /api/v1/tasksからタスクを読みこむ
// axiosを使用して、エンドポイントにアクセスできればOK
const showTasks = async () => {
try{
const {data:tasks} = await axios.get("/api/v1/tasks");

// タスクが1つもない時
if(tasks.length < 1){
  tasksDOM.innerHTML = `<h5 class="empty-list">タスクがありません。</h5>`
  return;
}

// タスクを出力する
const allTasks = tasks.map((task) => {
  // 一つ一つ取り出す
  const {completed,_id,name} = task;

  // バッククウォテーション
  // classはスペースで複数個付与できるっぽい？
  return `<div class="single-task ${completed && "task-completed"}">
  <h5>
    <span><i class="far fa-check-circle"></i></span>${name}
  </h5>
  <div class="task-links">
  <!-- 編集リンク -->
  <a href="edit.html?id=${_id}" class="edit-link">
    <i class="fas fa-edit"></i>
  </a>
  <!-- ゴミ箱button -->
  <button type="button" class="delete-btn" data-id="${_id}">
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

// タスクを新規作成する
// eventを取得する理由は送信ボタンを押すと、リロードされてしまうが、非同期通信のため、それは不要だから。（eventで阻止）
formDOM.addEventListener("submit",async (event) => {

// ボタン押下後の自動レンダリング解除
event.preventDefault();
// テキストフィールドから取得したvalueをnameに格納（右のname）
const name = taskInputDOM.value;
try{
  // 左のnameはTaskSchemaで作ったあnme属性
await axios.post("/api/v1/tasks",{name:name});
showTasks();
taskInputDOM.value = "";
// none -> blockに戻さないと、表示されない。
formAlertDOM.style.display = "block";
formAlertDOM.textContent = "タスクを追加しました";
formAlertDOM.classList.add("text-success");
}catch(err){
  console.log(err);
  // none -> blockに戻さないと、表示されない。
formAlertDOM.style.display = "block";
formAlertDOM.innerHTML = "無効です。もう一度やり直してください";
}
// 3000ミリ秒(正常系でも異常系でも)
setTimeout(() => {
  formAlertDOM.style.display = "none";
  formAlertDOM.classList.remove("text-success");
},3000)
});

// タスクを削除する
// eventを取得する理由は送信ボタンを押すと、リロードされてしまうが、非同期通信のため、それは不要だから。（eventで阻止）
tasksDOM.addEventListener("click",async (event) => {

const element =event.target;

// エレメントの親にdeleteボタンが含まれているならば
if(element.parentElement.classList.contains("delete-btn")){
  // 親要素のIDを取得（＝ボタンに付与した各TODOのID）
  const id = element.parentElement.dataset.id;
try{
  // 左のnameはTaskSchemaで作ったあnme属性
await axios.delete(`/api/v1/tasks/${id}`);
showTasks();
taskInputDOM.value = "";
}catch(err){
  console.log(err);
}
}
});