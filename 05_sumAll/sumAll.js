const sumAll = function(num1, num2) {
    let finalSum
    let sum = 0

    if (typeof(num1) != "number" || typeof(num2) != "number") {
        return "ERROR";
    }
    else if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    else if (num1 < num2) {
        for( let i = num1; i<= num2; i++) {
            sum += i
        }
    }
    else if (num1 > num2) {
        for( let i = num2; i<= num1; i++) {
            sum += i
        }
    }
    finalSum = sum
    return finalSum
};

// Do not edit below this line
module.exports = sumAll;
