const plusButton = document.getElementsByClassName(
  "product__quantity-control_inc"
);
Array.prototype.slice.call(plusButton).forEach((button) => {
  button.addEventListener("click", (button) => {
    const prevSibling = button.currentTarget.parentElement.querySelector(
      ".product__quantity-value"
    );
    prevSibling.innerText = Number(prevSibling.innerText) + 1;
  });
});

const minusButton = document.getElementsByClassName(
  "product__quantity-control_dec"
);
Array.prototype.slice.call(minusButton).forEach((button) => {
  button.addEventListener("click", (button) => {
    const nextSibling = button.currentTarget.parentElement.querySelector(
      ".product__quantity-value"
    );
    if (Number(nextSibling.innerText) - 1 > 0) {
      nextSibling.innerText = Number(nextSibling.innerText) - 1;
    }
  });
});

const addToChartButton = document.getElementsByClassName("product__add");
Array.prototype.slice.call(addToChartButton).forEach((button) => {
  button.addEventListener("click", (button) => {
    const chart = document.getElementsByClassName("cart__products")[0];

    // Current product
    const product = button.currentTarget.closest(".product");
    const prodAmount = button.currentTarget.parentElement.querySelector(
      ".product__quantity-value"
    );
    const prodAmountText = prodAmount.innerText;
    const productId = product.getAttribute("data-id");
    const child = chart.querySelector(`[data-id='${productId}']`);
    if (child) {
      const chartProdAmount = child.querySelector(".cart__product-count");
      chartProdAmount.innerText =
        Number(chartProdAmount.innerText) + Number(prodAmountText);
    } else {
      const productImage = product.querySelector(".product__image").src;

      const image = document.createElement("img");
      image.classList.add("cart__product-image");
      image.src = productImage;

      const count = document.createElement("div");
      count.classList.add("cart__product-count");
      count.innerText = Number(prodAmountText);

      const productInChart = document.createElement("div");
      productInChart.classList.add("cart__product");
      productInChart.setAttribute("data-id", productId);
      productInChart.appendChild(image);
      productInChart.appendChild(count);

      chart.appendChild(productInChart);
    }

    prodAmount.innerText = "1";
  });
});
