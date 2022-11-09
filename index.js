// Calculator project started 10/19/22

const maths = (a, b, c) => {
  let result = [0];
  if (b == "+") result = a + c;
  if (b == "-") result = a - c;
  if (b == "*") result = a * c;
  if (b == "/")
    if (c == 0) result = "ERROR";
    else result = a / c;
  console.log("maths", result);
  return result;
};

//display functions

//Button inputs
let buttons = document.getElementsByClassName("btn");
//console.log('buttons', buttons);
let nbr1 = "";
let operator = null;
let nbr2 = "";

function xyz(event) {
  let btnVal = event.currentTarget.value;
  console.log("btnVal", btnVal);
  console.log("bv1", btnVal);
  console.log("xyz1", nbr1, operator, nbr2);
  if (btnVal == "=") maths(nbr1, operator, nbr2);
  console.log("bv2", btnVal);
  console.log("xyz2", nbr1, operator, nbr2);
  if (btnVal == "c") (nbr1 = ""), (operator = null), (nbr2 = ""), (btnVal = "");
  console.log("bv3", btnVal);
  console.log("xyz3", nbr1, operator, nbr2);
  if (btnVal == "+" || btnVal == "-" || btnVal == "*" || btnVal == "/")
    operator = btnVal;
  console.log("bv4", btnVal);
  console.log("xyz4", nbr1, operator, nbr2);
  if (operator == null) {nbr1 += btnVal;
  }else {!isNaN(btnVal);
  nbr2 += btnVal;
  console.log("bv5", btnVal);
  console.log("xyz5", nbr1, operator, nbr2);
}}

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener("click", xyz);
  //console.log(buttons[i].value);
}
