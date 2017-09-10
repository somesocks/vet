/* eslint-env mocha */

const Vet = require('../../dist');
const { isString } = Vet.String;

const TESTS = [
	{ input: '', expected: true },
	{ input: 'a string', expected: true },

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


describe('String.isString', () => {
	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				isString(test.input) === test.expected ? null : new Error()
			)
		);
	});
});
