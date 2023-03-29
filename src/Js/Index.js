// Seleciona elementos do DOM
const navMenu = document.querySelector(".nav-menu"),
  navToggle = document.querySelector(".nav-toggle"),
  navClose = document.querySelector(".nav-close");

// Adiciona listener de evento para exibir o menu
// caso o elemento de toggle seja clicado
navToggle &&
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });

// Adiciona listener de evento para remover o menu
// caso o elemento de fechamento seja clicado
navClose &&
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });

// Alterando cores quando input está em foco
const inputClasses = [
  ".card-holder-input",
  ".card-number-input",
  ".exp-date-input",
  ".cvc-input",
];
const iconClasses = [
  ".user-icon",
  ".card-icon",
  ".calendar-icon",
  ".lock-icon",
];

function toggleFocus(elemnt, icon) {
  elemnt.addEventListener("focus", () => {
    icon.classList.add("focus");
  });

  elemnt.addEventListener("blur", () => {
    icon.classList.remove("focus");
  });
}

inputClasses.forEach((inputClass, index) => {
  const input = document.querySelector(inputClass);
  const icon = document.querySelector(iconClasses[index]);
  toggleFocus(input, icon);
});

const cardHolder = document.getElementById("card-holder");
const cardNumber = document.getElementById("card-number");
const expDate = document.getElementById("exp-date");
const cvc = document.getElementById("cvc");

// Formatação de inputs
// Formatando entrada de número do cartão
cardHolder.addEventListener("input", function () {
  let value = this.value;

  value = value.replace(/[^a-zA-Z\s]/g, "");

  this.value = value;
});

cardNumber.addEventListener("input", function () {
  let value = this.value;

  value = value.replace(/\s+/g, "");

  value = value.replace(/[^\d]/g, "");

  if (value.length > 16) {
    value = value.substring(0, 16);
  }

  const groups = value.match(/.{1,4}/g);

  const formattedValue = groups ? groups.join(" ") : "";

  this.value = formattedValue;
});

// Formatação de input de data
expDate.addEventListener("input", function () {
  let inputVal = this.value;

  inputVal = inputVal.replace(/\D/g, "");

  if (inputVal.length > 2) {
    inputVal = inputVal.slice(0, 2) + "/" + inputVal.slice(2);
  }

  if (inputVal.length > 5) {
    inputVal = inputVal.slice(0, 5);
  }

  this.value = inputVal;
});

cvc.addEventListener("input", function () {
  let inputVal = this.value;

  inputVal = inputVal.replace(/[^\d]/g, "");

  if (inputVal.length > 3) {
    inputVal = inputVal.slice(0, 3);
  }

  this.value = inputVal;
});

// Reproduzindo inputs no cartão
const name = document.getElementById("display-name");
const number = document.getElementById("display-number");
const date = document.getElementById("display-date");
const cvcNumber = document.getElementById("display-cvc");

function display(input, display) {
  input.addEventListener("input", function () {
    display.textContent = this.value;
  });
}

display(cardHolder, name);
display(cardNumber, number);
display(expDate, date);
display(cvc, cvcNumber);

// Show Success Popup
const form = document.getElementById("form");
const popupContainer = document.getElementById("popup-container");
const paymContainer = document.getElementById("payment-container");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  popupContainer.classList.add("show-modal");
  setTimeout(function () {
    popupContainer.classList.remove("show-modal");
  }, 20000);

  paymContainer.classList.add("hide");
});
