
const repeatString = function(string, num) {
    let repeatedString = string;
    for (let i = num-1; i>0,i--;) {
        repeatedString += string;
    }

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
