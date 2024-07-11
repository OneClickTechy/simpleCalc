//select all needed elements
const result = document.querySelector("#containerTitle");
const operators = document.querySelector("#operators");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const calc = document.querySelector("#calc");
let sym;
const a = 5,
  b = 6;

calc.addEventListener("click", (event) => {
  chkop();
  console.log(typeof num1.value);
  console.log(a, Math(sym.value), b);
});

function chkop() {
  for (let operator of operators) {
    if (operator.selected) {
      switch (operator.value) {
        case "+":
          result.innerHTML = Number(num1.value) + Number(num2.value);
          break;
        case "-":
          result.innerHTML = (Number(num1.value) - Number(num2.value));
          break;

        case "*":
          result.innerHTML = (Number(num1.value) * Number(num2.value));
          break;

        case "/":
          result.innerHTML = (Number(num1.value) / Number(num2.value));
          break;

        default:
          break;
      }
    }
  }
}
