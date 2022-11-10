// Calculator project started 10/19/22

//calculator function
const maths = (a, b, c) => {
  let result = [0];
  if (b == "+") result = (+a + +c);
  if (b == "-") result = a - c;
  if (b == "*") result = a * c;
  if (b == "/")
    if (c == 0) result = "DANGER Will Robinson";
    else result = a / c;
  console.log("maths", result);
  return result;
};

//display functions
  //  .toFixed(3)

//Button inputs
let buttons = document.getElementsByClassName("btn");
//console.log('buttons', buttons);
let nbr1 = "";
let operator = null;
let nbr2 = "";

function xyz(event) {
  let btnVal = event.currentTarget.value;
  console.log("bv1", btnVal);
  console.log("xyz1", nbr1, operator, nbr2);
  if (btnVal == "=") maths(nbr1, operator, nbr2);
  console.log("bv2", btnVal);
  console.log("xyz2", nbr1, operator, nbr2);
  if (btnVal == "c") (nbr1 = ""), (operator = null), (nbr2 = ""), (btnVal = "");
  console.log("bv3", btnVal);
  console.log("xyz3", nbr1, operator, nbr2);
  if (btnVal == "+" || btnVal == "-" || btnVal == "*" || btnVal == "/")
    (operator = btnVal), (btnVal = "");
  console.log("bv4", btnVal);
  console.log("xyz4", nbr1, operator, nbr2);
  if (
    operator == null &&
    (btnVal != "+" ||
      btnVal != "-" ||
      btnVal != "*" ||
      btnVal != "/" ||
      btnVal != "c")
  )
    nbr1 += btnVal;
  if (
    operator != null &&
    (btnVal != "+" ||
      btnVal != "-" ||
      btnVal != "*" ||
      btnVal != "/" ||
      btnVal != "c")
  )
    nbr2 += btnVal;
  // nbr2 is including operator
  console.log("bv5", btnVal);
  console.log("xyz5", nbr1, operator, nbr2);
}

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener("click", xyz);
  //console.log(buttons[i].value);
}
