const fibonacci = function(input) {
    if (input < 0) {
        return "OOPS"
    }
    let a = 1
    let b = 0
    let c
    for(let i = input; i > 1; i--) {
        c = a
        a = a+b;
        b = c
    }
    return a
};

// Do not edit below this line
module.exports = fibonacci;
