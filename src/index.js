var uniqueRandomArray = require('unique-random-array');
var yorubaNames = require('./yoruba-names.json');
module.exports = {
    all: yorubaNames,
    random: uniqueRandomArray(yorubaNames)
};
