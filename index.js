// Calculator project started 10/19/22

let nbr1 = "";
let operator = "";
let nbr2 = "";
let btnValue = ""

//calculator function
const maths = (a, b, c) => {
  let result = [0];
  //let roundedNum = (Math.round( result * 100 ) / 100).toFixed(2);
  if (b == "+") result = ((+a + +c).toFixed(2)), btnValue = (+a + +c);
  if (b == "-") result = ((a - c).toFixed(2)), btnValue = (a - c);
  if (b == "*") result = ((a * c).toFixed(2)), btnValue = (a * c);
  if (b == "/")
    if (c == 0) result = "DANGER Will Robinson", btnValue = ('Error');
    else result = ((a / c).toFixed(2)), btnValue = (a / c);
  console.log("maths", (result));
  return (result);
};


//display functions

function setValue() {
  document.getElementById('display').innerHTML = btnValue;
}


//Button inputs
let buttons = document.getElementsByClassName("btn");
//console.log('buttons', buttons);


function xyz(event) {
  let btnVal = event.currentTarget.value;
  console.log("bv1", btnVal);
  console.log("xyz1", nbr1, operator, nbr2);
 
  if (btnVal == "=") btnVal = "", maths(nbr1, operator, nbr2)
  console.log("bv2", btnVal);
  console.log("xyz2", nbr1, operator, nbr2);
 
  if (btnVal == "c") nbr1 = "", operator = "", nbr2 = "", btnVal = "", btnValue = "";
  console.log("bv3", btnVal);
  console.log("xyz3", nbr1, operator, nbr2);
  
  if (btnVal == "+" || btnVal == "-" || btnVal == "*" || btnVal == "/")
    operator = btnVal, btnValue += btnVal, btnVal = "";
  console.log("bv4", btnVal);
  console.log("xyz4", nbr1, operator, nbr2);
  
  if (
    operator == "" &&
    (btnVal != "+" ||
      btnVal != "-" ||
      btnVal != "*" ||
      btnVal != "/" ||
      btnVal != "c")
  )
 
  nbr1 += btnVal, btnValue += btnVal;
  if (
    operator != "" &&
    (btnVal != "+" ||
      btnVal == "-" ||
      btnVal != "*" ||
      btnVal != "/" ||
      btnVal != "c")
  )
    nbr2 += btnVal, btnValue += btnVal;
   console.log("bv5", btnVal);
  console.log("xyz5", nbr1, operator, nbr2);
  console.log('btnvalue', btnValue);
}

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener("click", xyz);
  //console.log(buttons[i].value);
}
setValue(btnValue);
