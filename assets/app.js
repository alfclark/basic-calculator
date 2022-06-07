const numberBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operator]");
const clearBtn = document.getElementById("clearBtn");
const deleteBtn = document.getElementById("deleteBtn");
const dotBtn = document.getElementById("dot");
const equal = document.getElementById("equal");

const result = document.getElementById("result");
const operation = document.getElementById("operation");

let firstNumber = "";
let secondNumber = "";
let stateOperation = null;

clearBtn.addEventListener("click", clearScreen);
deleteBtn.addEventListener("click", deleteNum);
dotBtn.addEventListener("click", appendDot);

numberBtns.forEach((button) => {
  button.addEventListener("click", () => appendNumber(button.textContent));
});

operatorBtns.forEach((button) => {
  button.addEventListener("click", () => setOperation(button.textContent));
});

function clearScreen() {
  result.textContent = 0;
}

function deleteNum() {
  if (result.textContent.length >= 2) {
    result.textContent = result.textContent.toString().slice(0, -1);
  } else if (result.textContent.length < 2) {
    result.textContent = 0;
  }
}

function appendDot() {
  if (result.textContent.includes(".")) {
    return;
  } else {
    result.textContent += ".";
  }
}

function appendNumber(number) {
  if (result.textContent)
    if (result.textContent === "0" || screenState) {
      resetScreen();
    }
  result.textContent += number;
}

function resetScreen() {
  result.textContent = "";
  screenState = false;
}

function setOperation(operator) {
  if (stateOperation !== null) {
    evaluate();
  }
  firstNumber = result.textContent;
  stateOperation = operator;
  operation.textContent = `${firstNumber} ${stateOperation}`;
  operation.style.opacity = 1;
  screenState = true;
}

function evaluate() {
  if (stateOperation === null || screenState) return;
  if (stateOperation === "÷" && result.textContent === "0") {
    result.textContent = "Math ERROR";
    return;
  }
  secondNumber = result.textContent;
  result.textContent = roundResult(
    operate(stateOperation, firstNumber, secondNumber)
  );
  operation.textContent = `${firstNumber} ${stateOperation} ${secondNumber}`;
  stateOperation = null;
}
