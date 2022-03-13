"use strict";

// VARIABLE DECLARATION
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 = document.getElementById("number3");
const btnSubmit = document.getElementById("btn-submit");
const btnClear = document.getElementById("btn-clear");
const result = document.getElementById("result");

let numbers = [2, 5, 6, 4];
// EVENT LISTENERS

// FUNCTIONS
function media(numbers) {
  // CALC
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  let mediaSum = sum / numbers.length;
  // DISPLAY ON SCREEN
}
media(numbers);
