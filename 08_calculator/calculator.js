const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function(array) {
  return array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let factorial = 1;
    let i = 1;
    while (i <= n) {
      factorial *= i;
      i ++;
    }
    return factorial;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
