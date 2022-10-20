// Calculator project started 10/19/22

function dataInput() {
  let num1 = prompt("Give me a number");
  let num2 = prompt("Give me another number");
  let operator = prompt("add, subtract, divide or multiply?");
console.log(num1, num2, operator);
};

  const add = function (a, b) {
    console.log("add", a + b);
    return a + b;
  };
  add(2, 5);

  const subtract = function (a, b) {
    console.log("subtract", a - b);
    return a + b;
  };
  subtract(2, 5);

  const multiply = function (a, b) {
    console.log("multiply", a * b);
    return a + b;
  };
  multiply(2, 5);

  const divide = function (a, b) {
    console.log("divide", a / b);
    return a + b;
  };
  divide(2, 5);


