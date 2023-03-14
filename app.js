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
const operator = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");

display.textContent = 0;
let displayValue = display.textContent;

digits.forEach((digits) => {
  digits.addEventListener("click", () => {
    populate(digits.textContent);
  });
});

operator.forEach((operator) => {
  operator.addEventListener("click", () => {
    populate(operator.textContent);
  });
});
