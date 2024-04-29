const form = document.getElementById("tasks__form");
const tasksList = document.getElementById("tasks__list");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputEl = document.getElementById("task__input");
  const inputValue = inputEl.value;
  if (inputValue) {
    createTask(inputValue);
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    const newTasks = savedTasks ? [...savedTasks, inputValue] : [inputValue];
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    inputEl.value = "";
  }
});

const createTask = (inputValue) => {
  const task = document.createElement("div");
  const taskTitle = document.createElement("div");
  const taskRemove = document.createElement("a");

  task.classList.add("task");

  taskTitle.classList.add("task__title");
  taskTitle.textContent = inputValue;

  taskRemove.classList.add("task__remove");
  taskRemove.setAttribute("href", "#");
  taskRemove.innerHTML = "&times;";

  taskRemove.addEventListener("click", removeTask);

  task.appendChild(taskTitle);
  task.appendChild(taskRemove);
  tasksList.appendChild(task);
};

const removeTask = (e) => {
  const eventTask = e.target;
  const taskEl = eventTask.closest(".task");
  const taskIndex = [...tasksList.children].indexOf(taskEl);
  taskEl.parentNode.removeChild(taskEl);
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.splice(taskIndex, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const addTasks = () => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks"));
  if (savedTasks) {
    for (let task of savedTasks) {
      createTask(task);
    }
  }
};

addTasks();
