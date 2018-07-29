'use strict';
const meow = require('meow');
const allWords = require('./');

const cli = meow(`
	Examples
		$ all-words
		blj

		$ all-words --all-two
		aa
		ab
		ac
		...

		$ all-words --rand-three
		ghr

		Options
			--help             show this help and close
			--letter           generate a random letter from the alphabet
			--two-letters      generate a random word with two letters
			--three-letters    generate a random word with three letters
			--four-letters     generate a random word with four letters
			--alphabet         return array with all letters from the alphabet
			--all-two          return array with all words with two letters
			--all-three        return array with all words with three letters
			--all-four         return array with all words with four letters
`);

if(cli.flags.letter)
	console.log(allWords.letter());

else if(cli.flags.twoLetters)
	console.log(allWords.twoLetters());

else if(cli.flags.threeLetters)
	console.log(allWords.threeLetters());

else if(cli.flags.fourLetters)
	console.log(allWords.fourLetters());

else if(cli.flags.alphabet)
	console.log(allWords.alphabet.join('\n'));

else if(cli.flags.allTwo)
	console.log(allWords.allTwo.join('\n'));

else if(cli.flags.allThree)
	console.log(allWords.allThree.join('\n'));

else if(cli.flags.allFour)
	console.log(allWords.allFour.join('\n'));

else if(cli.flags.all)
	console.log(allWords.all.join('\n'));
else
	console.log(allWords.rand());
