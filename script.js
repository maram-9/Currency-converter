console.log("Witaj!");

let amountElement = document.querySelector(".js-amountPln");
let currencyElement = document.querySelector(".js-currency");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.6763;
let rateCHF = 4.7592;
let rateGBP = 5.4357;
let rateUSD = 4.4969;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let currency = currencyElement.value;


    switch (currency) {
        case "EUR":
          result = amount / rateEUR;
          currencyValue = rateEUR;
          break;
        case "CHF":
          result = amount / rateCHF;
          currencyValue = rateCHF;
          break;
        case "GBP":
          result = amount / rateGBP;
          currencyValue = rateGBP;
          break;
        case "USD":
          result = amount / rateUSD;
          currencyValue = rateUSD;
          break;
      }

      resultElement.value = `${currency} = ${result.toFixed(2)} ${currency}`;
    });
    