var assert = require('assert');
var replacer = require('../replacer');

describe('replacer', function() {
    describe('replace', function() {
        it('should returns empty string when an empty string is passed', function(){

            let oracle = '';
            let str = ''; 
            let map = {};

            assert.equal(replacer.replace(str,map), oracle);
        });

        it('should returns the string when a empty map in passed', function(){

            let oracle = 'A';
            let str = 'A'; 
            let map = {};

            assert.equal(replacer.replace(str,map), oracle);
        });

        it('should returns an empty string when all characters in the string are replaced by an empty string', function(){

            let oracle = '';
            let str = 'A'; 
            let map = {'A' : ''};

            assert.equal(replacer.replace(str,map), oracle);
        });

        it('should not replace characters that are not in the map', function(){

            let oracle = 'B';
            let str = 'AB'; 
            let map = {'A' : ''};

            assert.equal(replacer.replace(str,map), oracle);
        });

        it('each replace has to be independent', function(){

            let oracle = 'BCD';
            let str = 'ABC'; 
            let map = {'A' : 'B', 'B' : 'C', 'C' : 'D'};

            assert.equal(replacer.replace(str,map), oracle);
        });
    });
});