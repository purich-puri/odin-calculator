//DISPLAY
var prevCalc = document.getElementById("prevCalc");
var toCalc = document.getElementById("toCalc");

//NUMBER BUTTONS
var btn9 = document.getElementById("btn-9").value;

prevCalc.textContent = "";
toCalc.textContent = "";

function addNum(e) {
  toCalc.textContent = toCalc.textContent + e;
}

function clearCalc() {
  toCalc.textContent = "";
  prevCalc.textContent = "";
}

function backSpaceCalc() {
  let removedLastChar = toCalc.textContent.slice(0, -1);
  toCalc.textContent = removedLastChar;
}
