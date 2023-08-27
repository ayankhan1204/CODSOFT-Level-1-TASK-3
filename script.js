let display = document.getElementById("display");
let equation = "";

function append(value) {
  equation += value;
  display.value = equation;
}

function clearDisplay() {
  equation = "";
  display.value = "";
}

function calculate() {
  try {
    let result = eval(equation);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}
