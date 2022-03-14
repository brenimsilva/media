"use strict";

// VARIABLE DECLARATION
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 = document.getElementById("number3");
const btnSubmit = document.getElementById("btn-submit");
const btnClear = document.getElementById("btn-clear");
const result = document.getElementById("result");
const btnAdd = document.getElementById('btn-add')
const formContainer = document.getElementById('top-side-form')
// INITIAL VALUES
result.textContent = 'INSERT NUMBERS'
let numbers = [];
let numInputs = 3;

// EVENT LISTENERS
btnSubmit.addEventListener('click', getValues)
btnClear.addEventListener('click', clearAll)
btnAdd.addEventListener('click', addInputs)

// FUNCTIONS

// CALC MEDIA
function media(numbers) {
  // CALC
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
  }
  let mediaSum = sum / numbers.length;
  // DISPLAY ON SCREEN
  result.textContent = mediaSum.toFixed(2);
}

// GET VAUES
function getValues() {
  let sum = 0;
  for (let i = numInputs; i > 0; i--) {
    if ((parseInt(document.getElementById(`number${i}`).value) > 0)) {
    numbers.push(parseInt(document.getElementById(`number${i}`).value)) }
  }
  console.log(numbers)
  media(numbers)
    // CLEAN ARRAY
    numbers = []
}

// CLEAR INPUTS
  function clearAll() {
    result.textContent = 'INSERT NUMBERS'
    number1.value =  '';
    number2.value = '';
    number3.value = '';
  }

  // ADD INPUTS 
  function addInputs(event) {
    event.preventDefault()
    // INCREMENT NUMINPUT
    numInputs++;
    //CREATE DIV
    const newDiv = document.createElement('div')
    newDiv.classList.add('each-item-div')
    //CREATE DIV CONTENT
    const newLabel = document.createElement('label')
    newLabel.textContent = `Number ${numInputs}`;
    newLabel.setAttribute('for', `number${numInputs}`)
    const newInput = document.createElement('input')
    newInput.classList.add('numbers')
    newInput.setAttribute('id',`number${numInputs}`)
    newInput.setAttribute('type', 'number')
    //APPEND CONTENT TO DIV
    newDiv.appendChild(newLabel);
    newDiv.appendChild(newInput);
    //APPEND DIV TO CONTAINER
    formContainer.appendChild(newDiv);
  }

  