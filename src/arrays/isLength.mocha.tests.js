/* eslint-env mocha */

const Vet = require('../');
const { isLength } = Vet.Array;


const TESTS = [
	{ input: [ 1, 'a string' ], expected: true },
	{ input: [ 1, null ], expected: true },
	{ input: [ 1, undefined ], expected: true },

	{ input: [ 1, 2, null ], expected: false },
	{ input: [ undefined ], expected: false },
	{ input: [ null ], expected: false },
	{ input: 'a string', expected: false },
	{ input: '', expected: false },
	{ input: undefined, expected: false },
	{ input: null, expected: false },
	{ input: true, expected: false },
	{ input: false, expected: false },
	{ input: (() => {}), expected: false },
	{ input: {}, expected: false },
	{ input: /a/, expected: false },
];


describe('vet/arrays/isLength', () => {

	const validator = isLength(2);

	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				validator(test.input) === test.expected ? null : new Error()
			)
		);
	});
});
