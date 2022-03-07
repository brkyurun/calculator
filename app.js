//Create the functions that populate the display when you click the number buttons…
//you should be storing the ‘display value’ in a variable somewhere for
//use in the next step.
const calcDisplay = document.querySelector(".calc-text");
const numbers = [...document.querySelectorAll(".calc-number")];
const operands = [...document.querySelectorAll(".operator")];
let numArr = [];

for (let number of numbers) {
  number.addEventListener("click", getNumber);
}

for (let operand of operands) {
  operand.addEventListener("click", storeNumbers);
}

function storeNumbers(num) {
  numArr.push(+num.textContent);
}

function getNumber(element) {
  console.log(element.textContent);
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "add":
      return add(num1, num2);
    case "subtract":
      return subtract(num1, num2);
    case "multiply":
      return multiply(num1, num2);
    case "divide":
      return divide(num1, num2);
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
