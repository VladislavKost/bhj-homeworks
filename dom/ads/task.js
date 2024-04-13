const rotators = document.querySelectorAll(".rotator__case");
let activeElement = 0;

const changeActive = (index) => {
  Array.from(rotators).forEach((rotator) =>
    rotator.classList.remove("rotator__case_active")
  );
  rotators[index].classList.add("rotator__case_active");
};

setInterval(() => {
  if (activeElement < rotators.length - 1) {
    index = activeElement + 1;
  } else {
    index = 0;
  }
  changeActive(index);
  activeElement = index;
}, 1000);
