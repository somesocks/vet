/* eslint-env mocha */

const Vet = require('../');
const { isEmpty } = Vet.String;

const TESTS = [
	{ input: '', expected: true },

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

describe('String.isEmpty', () => {
	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				isEmpty(test.input) === test.expected ? null : new Error()
			)
		);
	});
});
