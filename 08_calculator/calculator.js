const add = function(num1, num2) {
	return (num1+num2);
};

const subtract = function(num1,num2) {
	return (num1-num2)
};

const sum = function(array) {
  const reducer = (previousValue, currentValue) => (previousValue + currentValue);
  let arraySum = array.reduce(reducer, 0);
  return arraySum 
};

const multiply = function(array) {
  const reducer = (previousValue, currentValue) => (previousValue * currentValue);
  let arrayMultiplied = array.reduce(reducer);
  return arrayMultiplied
};

const power = function(num1,num2) {
  return (num1**num2)
}

const factorial = function(n) {
  if (n == 0 || n == 1){
    return 1;
  }else{
    return n * factorial(n-1);
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
