//
// This is only a SKELETON file for the "Word Count" exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

function Words() {};

Words.prototype.count = function(input) {
    //
    // YOUR CODE GOES HERE
    //
    var totalwords = 1;
    for (var i = 0; i < input.length; i++) {
        if (input [i] === " ") {
            totalwords = totalwords + 1;
        }
    }
    return totalwords;
};
module.exports = Words;
