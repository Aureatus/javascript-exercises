// Split string into single letters inside an array, then use a for loop to reconstruct it back to front.

const reverseString = function(str) {
    const splitString = str.split("")
    const reversedSplitString = splitString.reverse();
    const joinedString = reversedSplitString.join("");
    return joinedString
};

// Do not edit below this line
module.exports = reverseString;
