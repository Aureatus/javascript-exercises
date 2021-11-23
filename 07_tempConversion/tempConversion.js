const ftoc = function(input) {
  let num = input
  let celsiusValue = (((num - 32)*5)/9)
  celsiusValue = Math.round(celsiusValue * 10) / 10
  return celsiusValue

};

const ctof = function(input) {
  let num = input
  let fahrenheitValue = (((num/5)*9) + 32)
  fahrenheitValue = Math.round(fahrenheitValue * 10) / 10
  return fahrenheitValue

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
