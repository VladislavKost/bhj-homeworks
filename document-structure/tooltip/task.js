const tooltipEls = document.querySelectorAll(".has-tooltip");

tooltipEls.forEach((tooltipEl) => {
  const elTitle = tooltipEl.title;
  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  tooltip.textContent = elTitle;
  tooltipEl.parentElement.insertBefore(tooltip, tooltipEl.nextSibling);

  tooltipEl.addEventListener("click", (e) => {
    e.preventDefault();
    const activeTip = document.querySelector(".tooltip_active");
    if (activeTip) {
      activeTip.classList.remove("tooltip_active");
    }
    const el = e.target;
    const tooltip = el.nextSibling;
    tooltip.classList.add("tooltip_active");
  });
});
