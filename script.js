"use strict";

console.log("Hello");

let inputBillEl = document.querySelector(".input-bill");
let inputNumEl = document.querySelector(".input-number");
let inputCustomEl = document.querySelector(".input-custom");
let tipAmountEl = document.querySelector(".dollar-amount");
let totalAmountEl = document.querySelector(".dollar-amount1");
let resetEl = document.querySelector(".reset-btn");

let billEl = document.querySelectorAll(".tip-btn");

let tipAmount = 0;
let totalAmount = 0;

for (let i = 0; i < billEl.length; i++) {
  billEl[i].addEventListener("click", function () {
    billEl.forEach(function (billEl) {
      billEl.classList.remove("btn-hidden");
    });

    if (inputNumEl.value === "" || inputNumEl.value === "0") {
      inputNumEl.style.border = "solid 2px rgba(225, 112, 82, 1) ";
      document.querySelector(".cant-be-zero").classList.remove("hide");
    } else {
      billEl[i].classList.add("btn-hidden");
      inputNumEl.style.border = "none";
      document.querySelector(".cant-be-zero").classList.add("hide");
      tipAmount = (inputBillEl.value * billEl[i].value) / inputNumEl.value;
      tipAmountEl.textContent = tipAmount.toFixed(2);
      totalAmount =
        inputBillEl.value / inputNumEl.value +
        (inputBillEl.value * billEl[i].value) / inputNumEl.value;
      totalAmountEl.textContent = totalAmount.toFixed(2);
    }
  });
}

inputCustomEl.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    billEl.forEach(function (billEl) {
      billEl.classList.remove("btn-hidden");
    });
    if (inputNumEl.value === "" || inputNumEl.value === "0") {
      inputNumEl.style.border = "solid 2px rgba(225, 112, 82, 1) ";
      document.querySelector(".cant-be-zero").classList.remove("hide");
    } else {
      inputNumEl.style.border = "none";
      document.querySelector(".cant-be-zero").classList.add("hide");
      tipAmount =
        (inputBillEl.value * (inputCustomEl.value / 100)) / inputNumEl.value;
      tipAmountEl.textContent = tipAmount.toFixed(2);
      totalAmount =
        inputBillEl.value / inputNumEl.value +
        (inputBillEl.value * (inputCustomEl.value / 100)) / inputNumEl.value;
      totalAmountEl.textContent = totalAmount.toFixed(2);
    }
  }
});

resetEl.addEventListener("click", function () {
  inputNumEl.value = "";
  inputCustomEl.value = "";
  inputBillEl.value = "";

  let tipAmount = 0;
  let totalAmount = 0;
  tipAmountEl.textContent = tipAmount.toFixed(2);
  totalAmountEl.textContent = totalAmount.toFixed(2);
  billEl.forEach(function (billEl) {
    billEl.classList.remove("btn-hidden");
  });
});
