/* eslint-env mocha */

const Vet = require('../');
const { isLength } = Vet.String;

const TESTS = [
	{ input: '12', expected: true },

	{ input: '', expected: false },
	{ input: '1', expected: false },
	{ input: 'a string', expected: false },
	{ input: undefined, expected: false },
	{ input: null, expected: false },
	{ input: 0, expected: false },
	{ input: false, expected: false },
	{ input: true, expected: false },
	{ input: {}, expected: false },
	{ input: [], expected: false },
	{ input: () => {}, expected: false },
	{ input: /a/, expected: false },
];

describe('String.isLength', () => {
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
