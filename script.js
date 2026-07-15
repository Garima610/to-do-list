let entryForm= document.getElementById("entryForm");

entryForm.addEventListener("submit",(event)=>{
  event.preventDefault();
  let inputTask= document.getElementById("inputTask");
  let taskValue= inputTask.value.trim();
  // console.log(taskValue);
})

let status= "pending";
addTodo(taskValue, status);
inputTask.value= "";

function addTodo(taskValue, status){
  let oldData= getTodo();
  oldData.push({inputTask});
  saveTodo(oldData);
  renderTodo();
}

function saveTodo(todos){
  localStorage.setItem("todoappData", JSON.stringify(todos));
}

function getTodo(){
  let previousData= localStorage.getItem("todoappData");
  let originalData= JSON.parse(previousData);
  return originalData ? originalData: [];
}
function renderTodo() {
  let oldData = getTodo();
  console.log(oldData);
}
// let previousData = localStorage.getItem("todoappData");