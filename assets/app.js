const numberBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operator]");
const clearBtn = document.getElementById("clearBtn");
const deleteBtn = document.getElementById("deleteBtn");
const dotBtn = document.getElementById("dot");
const equal = document.getElementById("equal");

const result = document.getElementById("result");
const operation = document.getElementById("operation");

clearBtn.addEventListener("click", clearScreen);
deleteBtn.addEventListener("click", deleteNum);

function clearScreen() {
  result.textContent = 0;
  operation.style.opacity = 0;
}

function deleteNum() {
  if (result.textContent.length >= 2) {
    result.textContent = result.textContent.toString().slice(0, -1);
  } else if (result.textContent.length < 2) {
    result.textContent = 0;
  }
}
