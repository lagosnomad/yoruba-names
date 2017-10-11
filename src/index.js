var uniqueRandomArray = require('unique-random-array');
var yorubaNames = require('./yoruba-names.json');
var getRandomName = uniqueRandomArray(yorubaNames);

module.exports = {
    all: yorubaNames,
    random: random
};

function random(number) {
    if (number === undefined) {
        return getRandomName();
    } else {
        var randomNames = [];
        for (i = 0; i < number; i++) {
            randomNames.push(getRandomName());
        }
        return randomNames;
    }
}