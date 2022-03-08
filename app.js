const currentOperationDisplay = document.querySelector(".calc-text");
const historyOperationDisplay = document.querySelector(".display-value");
const numberButtons = [...document.querySelectorAll(".calc-number")];
const operatorButtons = [...document.querySelectorAll(".operator")];

let firstNumber = "";
let secondNumber = "";
let operatorChoice = "";
let changeState = false;

for (let button of numberButtons) {
  button.addEventListener("click", () => appendNumber(button.textContent));
}

for (let button of operatorButtons) {
  button.addEventListener("click", () => setOperator(button.textContent));
}

function setOperator(operator) {
  if (firstNumber !== "") calculateResult();
  firstNumber = currentOperationDisplay.textContent;
  operatorChoice = operator;
  historyOperationDisplay.textContent = `${firstNumber} ${operator}`;
  currentOperationDisplay.textContent = "";
}

function calculateResult() {
  secondNumber = currentOperationDisplay.textContent;
  firstNumber = operate(operatorChoice, +firstNumber, +secondNumber);
  currentOperationDisplay.textContent = firstNumber;
  historyOperationDisplay.textContent = `${firstNumber} ${operatorChoice} ${secondNumber}`;
}

function appendNumber(number) {
  currentOperationDisplay.textContent += number;
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

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "x":
      return multiply(num1, num2);
    case "÷":
      return divide(num1, num2);
  }
}
