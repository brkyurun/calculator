const currentOperationDisplay = document.querySelector(".calc-text");
const historyOperationDisplay = document.querySelector(".display-value");
const numberButtons = [...document.querySelectorAll(".calc-number")];
const operatorButtons = [...document.querySelectorAll(".operator")];
const equalsButton = document.querySelector(".equals-operator");
const clearButton = document.querySelector(".btn-clear");

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

equalsButton.addEventListener("click", () => {
  if (operatorChoice !== "") {
    if (firstNumber !== "") calculateResult();
  } else {
    alert("Not yet, please choose an operator.");
  }
});

clearButton.addEventListener("click", clear);

function updateDisplay() {
  currentOperationDisplay.textContent = "";
  changeState = false;
}

function setOperator(operator) {
  if (firstNumber !== "") calculateResult();
  firstNumber = currentOperationDisplay.textContent;
  operatorChoice = operator;
  historyOperationDisplay.textContent = `${firstNumber} ${operator}`;
  changeState = true;
}

function calculateResult() {
  if (operatorChoice === "÷" && currentOperationDisplay.textContent == 0) {
    alert("No divide by 0 *bonk*!");
    clear();
    return;
  }
  secondNumber = currentOperationDisplay.textContent;
  currentOperationDisplay.textContent = round(
    operate(operatorChoice, +firstNumber, +secondNumber)
  );
  historyOperationDisplay.textContent = `${firstNumber} ${operatorChoice} ${secondNumber}`;
  operatorChoice = "";
  firstNumber = "";
}

function clear() {
  firstNumber = "";
  secondNumber = "";
  operatorChoice = "";
  changeState = false;
  historyOperationDisplay.textContent = "";
  currentOperationDisplay.textContent = "";
}

function round(number) {
  return Math.floor((number * 100) / 100);
}

function appendNumber(number) {
  if (changeState) updateDisplay();
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
