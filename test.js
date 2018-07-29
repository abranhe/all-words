import test from 'ava';
import aw from './';

test('Test',t => {
	t.true(aw.alphabet.length > 0);
	t.true(aw.allTwo.length > 0);
	t.true(aw.allThree.length > 0);
	t.true(aw.allFour.length > 0);
	t.is(aw.all.length, 475254);

	t.truthy(aw.rand());
	t.not(aw.rand(), aw.rand());

	t.is(aw.alphabet[0], 'a');
	t.is(aw.alphabet[aw.alphabet.length-1], 'z');

	t.is(aw.allTwo[0], 'aa');
	t.is(aw.allTwo[aw.allTwo.length-1], 'zz');

	t.is(aw.allThree[0], 'aaa');
	t.is(aw.allThree[aw.allThree.length-1], 'zzz');

	t.is(aw.allFour[0], 'aaaa');
	t.is(aw.allFour[aw.allFour.length-1], 'zzzz');
});
