const tooltipEls = document.querySelectorAll(".has-tooltip");

tooltipEls.forEach((tooltipEl, index) => {
  const elTitle = tooltipEl.title;
  const tooltipTemplate = document.createElement("template");
  tooltipTemplate.innerHTML = `<div class="tooltip" data-id="${index}">${elTitle}</div>`;
  const tooltip = tooltipTemplate.content.cloneNode(true);
  tooltipEl.parentElement.insertBefore(tooltip, tooltipEl.nextSibling);

  tooltipEl.addEventListener("click", (e) => {
    e.preventDefault();
    const el = e.target;
    const curElPosition = el.getBoundingClientRect();

    const newTooltip = el.nextSibling;
    const activeTip = document.querySelector(".tooltip_active");
    newTooltip.style.left = curElPosition.left + window.scrollX + "px";
    newTooltip.style.top = curElPosition.bottom + window.scrollY + "px";
    if (activeTip) {
      if (
        activeTip &&
        newTooltip.getAttribute("data-id") === activeTip.getAttribute("data-id")
      ) {
        activeTip.classList.remove("tooltip_active");
      } else {
        activeTip.classList.remove("tooltip_active");
        newTooltip.classList.add("tooltip_active");
      }
    } else {
      newTooltip.classList.add("tooltip_active");
    }
  });
});
