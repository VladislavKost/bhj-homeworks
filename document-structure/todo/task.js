const form = document.getElementById("tasks__form");
const tasksList = document.getElementById("tasks__list");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputEl = document.getElementById("task__input");
  const inputValue = inputEl.value;
  if (inputValue.trim()) {
    createTask(inputValue);
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    const newTasks = savedTasks ? [...savedTasks, inputValue] : [inputValue];
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    inputEl.value = "";
  }
});

const createTask = (inputValue) => {
  tasksList.insertAdjacentHTML(
    "beforeend",
    `
        <div class="task">
        <div class="task__title">
            ${inputValue}
        </div>
        <a href="#" class="task__remove">&times;</a>
        </div>
    `
  );
  const lastTask = tasksList.lastElementChild;
  const removeButton = lastTask.querySelector(".task__remove");
  removeButton.addEventListener("click", removeTask);
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
