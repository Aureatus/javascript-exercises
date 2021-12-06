const palindromes = function (str) {
    str = str.replaceAll(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "")
    str = str.toLowerCase()
    str = str.replaceAll(" " ,"")
    console.log(str)
    let splitStr = str.split("")
    let reverseArray = splitStr.reverse()
    let joinArray = reverseArray.join("")

    if (str === joinArray) {
        return true
    } else{
        return false
    }

}
// Do not edit below this line
module.exports = palindromes;
