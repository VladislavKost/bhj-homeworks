const isVisible = (el) => {
  const { top, bottom } = el.getBoundingClientRect();

  if (bottom > 0 && top < window.innerHeight) {
    el.classList.add("reveal_active");
  } else {
    el.classList.remove("reveal_active");
  }
};

const elements = document.querySelectorAll(".reveal");
elements.forEach((el) => {
  setInterval(() => {
    isVisible(el);
  }, 1000);
});
