// Calculator project started 10/19/22

const maths = (a, b, c) => {
  let result = [];
  if (c === "+") result = a + b;
  if (c === "-") result = a - b;
  if (c === "*") result = a * b;
  if (c === "/")
    if (b === 0) result = "Cant divide by zero";
    else result = a / b;
  console.log(result);
  return result;
};
maths(7, 3, "*");
