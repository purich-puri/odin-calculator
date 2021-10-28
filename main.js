//DISPLAY
var prevCalcDisplay = document.getElementById("prevCalcDisplay");
var toCalc = document.getElementById("toCalc");
var pickedOperator = "";
var prevCalc = "";

prevCalcDisplay.textContent = "";
toCalc.textContent = "";

function addNum(e) {
  toCalc.textContent = toCalc.textContent + e;
}

function addOperator(e) {
  pickedOperator = e;
  prevCalc = toCalc.textContent;
  prevCalcDisplay.textContent = toCalc.textContent + pickedOperator;
  toCalc.textContent = "";
}

function clearCalc() {
  toCalc.textContent = "";
  prevCalcDisplay.textContent = "";
}

function backSpaceCalc() {
  let removedLastChar = toCalc.textContent.slice(0, -1);
  toCalc.textContent = removedLastChar;
}

function doCalc() {
  if (pickedOperator === "+") {
    operators["+"](prevCalc, toCalc.textContent);
  } else if (pickedOperator === "-") {
    operators["-"](prevCalc, toCalc.textContent);
  } else if (pickedOperator === "*") {
    operators["*"](prevCalc, toCalc.textContent);
  } else if (pickedOperator === "/") {
    if (toCalc.textContent != "0") {
      operators["/"](prevCalc, toCalc.textContent);
    } else toCalc.textContent = "ERROR";
  } else {
    return;
  }
}

var operators = {
  "+": function (a, b) {
    prevCalcDisplay.textContent =
      prevCalcDisplay.textContent + toCalc.textContent;
    toCalc.textContent = +a + +b;
  },
  "-": function (a, b) {
    toCalc.textContent = a - b;
  },
  "*": function (a, b) {
    prevCalcDisplay.textContent =
      prevCalcDisplay.textContent + toCalc.textContent;
    toCalc.textContent = a * b;
  },
  "/": function (a, b) {
    toCalc.textContent = a / b;
  },
};
