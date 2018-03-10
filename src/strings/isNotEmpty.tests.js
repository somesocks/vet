/* eslint-env mocha */

const Vet = require('../../dist/vet');
const { isNotEmpty } = Vet.String;

const TESTS = [
	{ input: 'a string', expected: true },

	{ input: '', expected: false },
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

describe('String.isNotEmpty', () => {
	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				isNotEmpty(test.input) === test.expected ? null : new Error()
			)
		);
	});
});
