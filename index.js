'use strict';
const cUa = require('consecutively-unique-array');
const one = require('./words/alphabet.json');
const two = require('./words/two-letters.json');
const three = require('./words/three-letters.json');
const four = require('./words/four-letters.json');

Array.prototype.randomLength = function(){
  return this[Math.floor(Math.random()*this.length)];
}

exports.rand = cUa([one, two, three, four].randomLength());

exports.letter = cUa(one);
exports.twoLetters = cUa(two);
exports.threeLetters = cUa(three);
exports.fourLetters = cUa(four);

exports.alphabet = one;
exports.allTwo = two;
exports.allThree = three;
exports.allFour = four;
exports.all = one.concat(two.concat(three.concat(four)));
