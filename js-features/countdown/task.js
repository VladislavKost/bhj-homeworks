const timer = document.getElementById("timer");

const timerFunc = () => {
  if (Number(timer.textContent) > 0) {
    timer.textContent = Number(timer.textContent) - 1;
  } else {
    alert("Вы победили в конкурсе!");
    clearInterval(intervalId);
  }
};

const intervalId = setInterval(timerFunc, 1000);
