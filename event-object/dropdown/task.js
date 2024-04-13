const dropdown = document.querySelector(".dropdown");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownItems = document.querySelectorAll(".dropdown__item");
const dropdownValue = document.querySelector(".dropdown__value");

dropdown.addEventListener("click", () => {
  dropdownList.classList.toggle("dropdown__list_active");
});

Array.from(dropdownItems).forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const newValue = item.textContent;
    dropdownValue.textContent = newValue;
  });
});
