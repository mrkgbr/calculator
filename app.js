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

const display = document.querySelector("#calc-display");
display.textContent = 0;
let displayValue = display.textContent;
const btn = document.querySelectorAll("button");
btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (displayValue == 0) {
      displayValue = btn.textContent;
    } else {
      displayValue += btn.textContent;
    }
    display.textContent = displayValue;
  });
});
