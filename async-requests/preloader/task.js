const getExchangeRates = async () => {
  const response = await fetch(
    "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
  );
  return response.json();
};

const showExchangeRates = async () => {
  const localStorageData = localStorage.getItem("exchangeRates");
  let exchangeRates = {};
  // Проверяем наличие данных в локальном хранилище.
  if (localStorageData && Object.keys(localStorageData).length > 0) {
    exchangeRates = JSON.parse(localStorageData);
  } else {
    // Если в локальном хранилище пусто, то загружаем данные с сервера.
    exchangeRates = await getExchangeRates();
    localStorage.setItem("exchangeRates", JSON.stringify(exchangeRates));
  }
  const ratesItems = document.getElementById("items");
  const valute = exchangeRates.response.Valute;
  Object.values(valute).forEach((value) => {
    const divItem = document.createElement("div");
    const divCode = document.createElement("div");
    const divValue = document.createElement("div");
    const divCurrency = document.createElement("div");

    divItem.classList.add("item");
    divCode.classList.add("item__code");
    divValue.classList.add("item__value");
    divCurrency.classList.add("item__currency");

    divCode.textContent = value.CharCode;
    divValue.textContent = value.Value;
    divCurrency.textContent = "руб.";

    divItem.appendChild(divCode);
    divItem.appendChild(divValue);
    divItem.appendChild(divCurrency);

    ratesItems.appendChild(divItem);
  });
  const loader = document.getElementById("loader");
  loader.classList.remove("loader_active");
};

document.addEventListener("DOMContentLoaded", showExchangeRates);
