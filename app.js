//Create the functions that populate the display when you click the number buttons…
//you should be storing the ‘display value’ in a variable somewhere for
//use in the next step.
const calcDisplay = document.querySelector(".calc-text");
const numbers = [...document.querySelectorAll(".calc-number")];

for (let number of numbers) {
  number.addEventListener(
    "click",
    (number) => console.log(number.target.textContent) //don't forget to change to return
  );
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
