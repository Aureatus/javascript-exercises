const getTheTitles = function(input) {
    let titles = []
    for (let key in input) {
        titles.push(input[key].title)
    }
    return titles
};

// Do not edit below this line
module.exports = getTheTitles;
