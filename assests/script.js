console.log(window.document);
var btn = window.document.querySelector("button");
console.dir(btn);
document.querySelector("button").textContent;
var buttonEl = document.querySelector("#save-task");
console.log(buttonEl);
buttonEl.addEventListener("click", function() {
    alert("button clicked");
  });

  document.createElement("li");
  var taskItemEl = document.createElement("li");
  taskItemEl.textContent = "hello";
taskItemEl;
var tasksToDoEl = document.querySelector("#tasks-to-do");
var taskItemEl = document.createElement("li");
taskItemEl.textContent = "hello";
tasksToDoEl.appendChild(taskItemEl);
taskItemEl.className = "task-item";

var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

buttonEl.addEventListener("click", function() {
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
});





