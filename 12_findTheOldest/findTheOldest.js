const findTheOldest = function(people) {
    let ages = []
    let currentDate = new Date();
            let currentYear = currentDate.getFullYear();
    for(let key in people) {
        if (people[key].yearOfDeath === undefined) {
            let age = currentYear - (people[key].yearOfBirth)
            ages.push(age)
        } 
        else if (((currentYear) - (people[key].yearOfBirth) ) > 120) {
            let index = people.indexOf((currentYear) - (people[key].yearOfBirth));
            if (index > -1) {
                people.splice(index, 1);
            }
        }
        else {
            let age = (people[key].yearOfDeath) - (people[key].yearOfBirth)
            ages.push(age)
        }
    }
    let oldestAge = Math.max.apply(null, ages);
    function checkAge (ages) {
        return ages === oldestAge
    }
    let oldestAgeIndex =ages.findIndex(checkAge)
    return people[oldestAgeIndex]
};

// Do not edit below this line
module.exports = findTheOldest;
