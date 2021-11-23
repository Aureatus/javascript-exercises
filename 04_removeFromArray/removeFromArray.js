const removeFromArray = function(arr) {
    let temp = [];
    for (let i = 1; i < arguments.length; i++) {
        temp.push(arguments[i]);
        arr = arguments[0].filter(function(value) {
            return (value !== temp[i - 1]) ;
        });
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
