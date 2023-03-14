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

const populate = (content) => {
  if (displayValue != 0 || content == "." || displayValue.includes(".")) {
    displayValue += content;
  } else {
    displayValue = content;
  }
  display.textContent = displayValue;
};

btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    populate(btn.textContent);
  });
});
