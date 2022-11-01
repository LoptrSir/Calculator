// Calculator project started 10/19/22

const maths = (a, b, c) => {
  let result = [];
  if (c == "+") result = a + b;
  if (c == "-") result = a - b;
  if (c == "*") result = a * b;
  if (c == "/")
    if (b === 0) result = "ERROR";
    else result = a / b;
  console.log(result);
  return result;
};

// begin unproven code. button click is working but not producing btn value.
let buttons = document.getElementsByClassName("btn");
console.log(buttons);
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener("click", xyz);

  function xyz(x) {
    let nbr1 = "0";
    let operator = null;
    let nbr2 = "0";
    const sum = maths(nbr1, operator, nbr2);
    if (x == "=") x = sum;
    if (x == "+" || "-" || "*" || "/") x = operator;
    if (operator == null) x = nbr1;
    else x = nbr2;
    console.log(nbr1, operator, nbr2);
  }
}
//inputs(7, '+', 9);
//maths(7, 23, "+");
