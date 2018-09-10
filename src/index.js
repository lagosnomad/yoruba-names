import uniqueRandomArray from 'unique-random-array';
import yorubaNames from './yoruba-names.json';

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
        for (var i = 0; i < number; i++) {
            randomNames.push(getRandomName());
        }
        return randomNames;
    }
}

function Royalname(number) {
    if (number == undefined) {
        if (getRandomName.match(/Adé/i)) {
            return getRandomName();
        }

    } else {
        var randomNames = [];
        for (var i = 0; i <= number; i++) {
            if (getRandomName.match(/Adé/i)) {
                randomNames.push(getRandomName());
            }

        }
        return randomNames;
    }
}