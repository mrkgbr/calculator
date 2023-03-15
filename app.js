// SELECTORS
const display = document.querySelector("#display-content");
const digits = document.querySelectorAll(".digits");
const operators = document.querySelectorAll(".operators");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".operate");

// VARIABLES
let displayValue;
let firstNumber = "";
let secondNumber = "";
let operator;
let result;

displayValue = display.textContent = "0"; // set default value to the display

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
  if (content == "." && displayValue.includes(".")) {
    return;
  } else if (
    displayValue != 0 ||
    content == "." ||
    displayValue.includes(".")
  ) {
    displayValue += content;
  } else {
    displayValue = content;
  }
  display.textContent = displayValue;
};

// ASSIGN FUNCTIONS TO THE BUTTONS

digits.forEach((btn) => {
  btn.addEventListener("click", () => {
    populate(btn.textContent);
  });
});

operators.forEach((btn) => {
  btn.addEventListener("click", () => {
    operator = btn.textContent;
    if (firstNumber === "") {
      firstNumber = displayValue;
    } else {
      secondNumber = displayValue;
      result = operate(operator, Number(firstNumber), Number(secondNumber));
      firstNumber = result;
    }
    displayValue = "0";
  });
});

equal.addEventListener("click", () => {
  if (firstNumber === "") {
    firstNumber = "0";
  } else {
    secondNumber = displayValue;
  }
  result = operate(operator, Number(firstNumber), Number(secondNumber));
  display.textContent = result;
  firstNumber = result;
  displayValue = "0";
});

clear.addEventListener("click", () => {
  displayValue = "0";
  display.textContent = displayValue;
  firstNumber = "";
  result = "";
});
