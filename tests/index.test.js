var expect = require('chai').expect;
var yorubaNames = require('../src/index');

describe('yoruba-names', function() {
    describe('all', function() {
        it('should return an array of names', function() {
            expect(yorubaNames.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every(function(item) {
                    return typeof item === 'string';
                });
            }
        });
    });

    describe('random', function() {
        it('should return a random name', function() {
            var randomName = yorubaNames.random();
            expect(yorubaNames.all).to.include(randomName);
        });
    });
});