<p align="center">
	<a href="https://www.npmjs.com/package/all-words"><img src="https://cdn.abraham.gq/projects/all-words/words.png"></a>
	<br>
	<br>
	<br>
	<a href="https://www.npmjs.com/package/all-words">
	All Words</a>: Generate all available words (up to four letters) super fast
</p>

<p align="center">
	<a href="https://travis-ci.org/abranhe/all-words"><img src="https://img.shields.io/travis/abranhe/all-words.svg?logo=travis" /></a>
	<a href="https://github.com/abranhe"><img src="https://abranhe.com/badge.svg"></a>
	<a href="https://cash.me/$abranhe"><img src="https://cdn.abraham.gq/badges/cash-me.svg"></a>
	<a href="https://www.patreon.com/abranhe"><img src="https://cdn.abraham.gq/badges/patreon.svg" /></a>
	<a href="https://github.com/abranhe/all-words/blob/master/LICENSE"><img src="https://img.shields.io/github/license/abranhe/all-words.svg" /></a>
	<a href="https://github.com/abranhe/all-words/blob/master/LICENSE"><img src="https://img.shields.io/github/repo-size/abranhe/all-words.svg" /></a>


</p>

# Why?

- Why not?, lol 😂
- Clean and focused
- Actively maintained
- CLI included
- Fast and straightforward

# Install

```
$ npm install all-words
```

> ![wow](https://png.icons8.com/color/30/000000/surprised.png) Wow
>
> This will generate over +450 000 words in just a second


# Usage

```js
const allWords = require('all-words');

console.log(allWords.rand(), allWords.rand(), allWords.rand());
//=> 'as lsfk wls'

allWords.letter();
//=> 'z'

allWords.twoLetters();
//=> 'xc'

allWords.fourLetters();
//=> 'ughp'

console.log(allWords.alphabet);
//=> ['a', 'b' .... 'z']

console.log(allWords.allThree);
//=> ['aaa', 'aab' .... 'zzz']
```

# API

**rand()**

Type: `function`

> Return a random word with a random size from 1 - 4

**letter()**

Type: `function`

> Return a random vowel

**twoLetters()**

Type: `function`

> Return a random word with two letters

**threeLetters()**

Type: `function`

> Return a random word with three letters

**fourLetters()**

Type: `function`

> Return a random word with four letters

**.alpabet**

Type: `array`

> Return an array with all vowels of the alphabet

**.allTwo**

Type: `array`

> Return an array with all words with two letters

**.allThree**

Type: `array`

> Return an array with all words with three letters

**.allFour**

Type: `array`

> Return an array with all words with four letters

# CLI

```
$ all-words --help

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
```

# Team

|[![Carlos Abraham Logo](https://avatars3.githubusercontent.com/u/21347264?s=50&v=4)](https://19cah.com)|
| :-: |
| [Carlos Abraham](https://github.com/abranhe) |

# Related

[r4nd0mstr1ng](https://github.com/abranhe/r4nd0mstr1ng):  random string generator


# License

[MIT](https://github.com/abranhe/all-words/blob/master/LICENSE) License © [Carlos Abraham](https://github.com/abranhe/)
