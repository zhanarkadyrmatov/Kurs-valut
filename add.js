let moneyAmountEl = document.querySelector(".moneyAmount");
let targetMoneyAmountEl = document.querySelector(".targetMoneyAmount");
let currencyEl = document.querySelector(".currency");
let resultEl = document.querySelector(".result");

moneyAmountEl.addEventListener("input", convertCurrency);
targetMoneyAmountEl.addEventListener("input", convertCurrencyForm);

function convertCurrency() {
  let moneyAmount = parseFloat(moneyAmountEl.value);
  let currency = parseFloat(currencyEl.value);

  let result = moneyAmount * currency;
  targetMoneyAmountEl.value = result.toFixed(2);
}

function convertCurrencyForm() {
  let moneyAmount = parseFloat(targetMoneyAmountEl.value);
  let currency = parseFloat(currencyEl.value);

  let result = moneyAmount / currency;
  moneyAmountEl.value = result.toFixed(2);
}

currencyEl.addEventListener("input", onCurrencyChange);
let currentCurrency = document.querySelector(".currentCurrency");
function onCurrencyChange() {
  currentCurrency.innerHTML = currencyEl.options[currencyEl.selectedIndex].text;
  convertCurrency();
}

onCurrencyChange();
