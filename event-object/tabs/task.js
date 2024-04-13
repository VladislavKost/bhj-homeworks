const tabs = Array.from(document.getElementsByClassName("tab"));
const tabContents = Array.from(document.getElementsByClassName("tab__content"));

tabs.forEach((tabEl, index) => {
  tabEl.addEventListener("click", () => {
    tabs.forEach((tab) => tab.classList.remove("tab_active"));
    tabEl.classList.add("tab_active");
    tabContents.forEach((tabContent) =>
      tabContent.classList.remove("tab__content_active")
    );
    tabContents[index].classList.add("tab__content_active");
  });
});
