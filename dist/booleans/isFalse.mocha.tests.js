/* eslint-env mocha */

const Vet = require('../');
const { isFalse } = Vet.Boolean;

const TESTS = [
	{ input: false, expected: true },

	{ input: true, expected: false },
	{ input: (() => {}), expected: false },
	{ input: '', expected: false },
	{ input: 'a string', expected: false },
	{ input: undefined, expected: false },
	{ input: null, expected: false },
	{ input: {}, expected: false },
	{ input: [], expected: false },
	{ input: /a/, expected: false },
];


describe('vet/booleans/isFalse', () => {
	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				isFalse(test.input) === test.expected ? null : new Error()
			)
		);
	});
});
