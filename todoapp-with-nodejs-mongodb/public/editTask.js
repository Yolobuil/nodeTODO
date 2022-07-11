const taskIdDOM = document.querySelector(".task-edit-id");
const taskNameDOM = document.querySelector(".task-edit-name");
const editFormDOM = document.querySelector(".single-task-form");
const formAlertDOM = document.querySelector(".form-alert");

// locationを取得できる
// searchの中にqueryの文字列が付加されている
const params = window.location.search;

// ?=以降の値を取得できる
const id = new URLSearchParams(params).get("id");

// 特定のタスクを取得
const showTask = async () =>{
  try{
const {data:task} = await axios.get(`/api/v1/tasks/${id}`);
const {_id,completed,name} = task;
// content
taskIdDOM.textContent = _id;
// value属性
taskNameDOM.value = name;
  }catch(err){
console.log(err)
  }
};

showTask();

//  タスクの編集
editFormDOM.addEventListener("submit",async (e) => {
  e.preventDefault();

   try{
     const taskName = taskNameDOM.value;
const {data:task} = await axios.patch(`/api/v1/tasks/${id}`,{name: taskName});

formAlertDOM.style.display = "block";
formAlertDOM.textContent = "編集に成功しました";
formAlertDOM.classList.add("text-success");
  }catch(err){
console.log(err)
  }
  // 3000ミリ秒(正常系でも異常系でも)
setTimeout(() => {
  formAlertDOM.style.display = "none";
  formAlertDOM.classList.remove("text-success");
},3000)
});
