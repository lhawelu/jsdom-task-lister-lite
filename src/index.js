let form = document.querySelector('form')//get more specific ie. use id or class
form.addEventListener('submit', handNewTask)

function handNewTask(e) {
  e.preventDefault();
  let taskList = document.querySelector('ul')//get more specific ie. use tag
  addNewTask(e.target['new-task-description'].value, taskList)
}

//todo create X button for deletion **remember operation order**
function addNewTask(x,y) {
  let task = document.createElement('li')
  task.textContent = x
  y.appendChild(task)
}
