const leapYears = function(year) {
    dividedBy4 = year / 4
    dividedBy100 = year / 100
    dividedBy400 = year / 400
    divisionBy100Check = Number.isInteger(dividedBy100)
    console.log(Number.isInteger(dividedBy400))
    if (Number.isInteger(dividedBy4)) {
        if ((divisionBy100Check) && (Number.isInteger(dividedBy400))) {
            return true
        }
        else if (divisionBy100Check) {
            return false
        }
        return true
    }
    else return false
};

// Do not edit below this line
module.exports = leapYears;
