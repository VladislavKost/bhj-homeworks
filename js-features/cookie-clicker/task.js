const cookie = document.getElementById("cookie");
const clicker = document.getElementById("clicker__counter");
const clickSpeed = document.getElementById("clicker__speed");
let switchSize = true;
let lastClickTime = Date.now();

cookie.onclick = () => {
  const frequency = 1000 / (Date.now() - lastClickTime);
  clicker.textContent = Number(clicker.textContent) + 1;
  clickSpeed.textContent = parseFloat(frequency.toPrecision(3));

  cookie.width = switchSize ? cookie.width + 10 : cookie.width - 10;
  cookie.height = switchSize ? cookie.height + 6 : cookie.height - 6;

  switchSize = !switchSize;

  lastClickTime = Date.now();
};
