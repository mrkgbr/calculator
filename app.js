// FUNCTIONS

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const operate = (operator, a, b) => {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
};

const populate = (content) => {
  // updates display when click on digits
  if (displayValue != 0 || content == "." || displayValue.includes(".")) {
    displayValue += content;
  } else {
    displayValue = content;
  }
  display.textContent = displayValue;
};

// SELECTORS
const display = document.querySelector("#calc-display");
const digits = document.querySelectorAll(".digits");
const operators = document.querySelectorAll(".operators");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".operate");

display.textContent = 0; // set default value to the display
let displayValue = display.textContent;
let firstNumber = 0;
let operator;

// ASSIGN FUNCTIONS TO THE BUTTONS

digits.forEach((btn) => {
  btn.addEventListener("click", () => {
    populate(btn.textContent);
  });
});

operators.forEach((btn) => {
  btn.addEventListener("click", () => {
    firstNumber = displayValue;
    operator = btn.textContent;
    display.textContent = firstNumber;
    displayValue = "0";
  });
});

equal.addEventListener("click", () => {
  let result = operate(operator, Number(firstNumber), Number(displayValue));
  display.textContent = result;
  firstNumber = result;
  displayValue = "0";
});
