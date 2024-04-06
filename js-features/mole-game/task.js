const holes = document.getElementsByClassName("hole");
const moleCount = document.getElementById("dead");
const lostCount = document.getElementById("lost");

for (let hole of holes) {
  hole.onclick = () => {
    if (hole.classList.contains("hole_has-mole")) {
      moleCount.textContent = Number(moleCount.textContent) + 1;
      if (Number(moleCount.textContent) >= 10) {
        alert("Победа");
        startNewGame();
      }
    } else {
      lostCount.textContent = Number(lostCount.textContent) + 1;
      if (Number(lostCount.textContent) >= 5) {
        alert("Проиграл!");
        startNewGame();
      }
    }
  };
}

const startNewGame = () => {
  moleCount.textContent = 0;
  lostCount.textContent = 0;
};
