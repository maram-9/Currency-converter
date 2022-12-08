{
  const welcome = () => {
  console.log("Hello, nice to see you!");
};

const catchCurrencyValue = (currency) => {
  const rateEUR = 4.6763;
  const rateCHF = 4.7592;
  const rateGBP = 5.4357;
  const rateUSD = 4.4969;

  switch (currency) {
      case "EUR":
        return rateEUR;
      case "CHF":
        return rateCHF;
      case "GBP":
        return rateGBP;
      case "USD":
        return rateUSD; 
};
};

const calculateResult = (amount, currencyValue) => {
  return amount / currencyValue;
};

const onFormSubmit = (event) => {
  event.preventDefault();

const amountElement = document.querySelector(".js-amountPln");
const currencyElement = document.querySelector(".js-currency");
const resultElement = document.querySelector(".js-result");

const amount = +amountElement.value;
const currency = currencyElement.value;

const currencyValue = catchCurrencyValue(currency);
const result = calculateResult(amount, currencyValue);

resultElement.value = `${currency} = ${result.toFixed(2)} ${currency}`;
};

const init = () => {
  const formElement = document.querySelector(".js-form");
  
  formElement.addEventListener("submit", onFormSubmit);

  welcome();
};

  init();
}
