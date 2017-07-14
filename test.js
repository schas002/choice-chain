const test = require('ava').test;
const choiceChain = require('.');

const network = [
	[choiceChain.START, 'a'],
	['a', 'a'],
	['a', 'b'],
	['b', 'a'],
	['b', 'b'],
	['b', choiceChain.END]
];

test('evolve(network)', t => {
	const testSubject = choiceChain.evolve(network);
	t.pass('HACK: `typeof` lies that arrays are objects');
	// Hat tip to Stack Overflow answer <https://stackoverflow.com/a/4775737> by
	// user113716 <https://stackoverflow.com/users/113716/user113716> to question
	// "Check if object is array?" <https://stackoverflow.com/q/4775722> by mpen
	// <https://stackoverflow.com/users/65387/mpen> (CC BY-SA 3.0). Congrats, the
	// code got worse-looking due to the attribution required.
	t.is(Object.prototype.toString.call(testSubject), '[object Array]',
		'should return an array');
	testSubject.forEach(_ => {
		t.truthy(_ === 'a' || _ === 'b', 'should only return tokens in network');
	});
});
