/* eslint-env mocha */

const isFunction = require('./isFunction');

const TESTS = [
	{ input: () => {}, expected: true },

	{ input: '', expected: false },
	{ input: 'a string', expected: false },
	{ input: undefined, expected: false },
	{ input: null, expected: false },
	{ input: false, expected: false },
	{ input: true, expected: false },
	{ input: {}, expected: false },
	{ input: [], expected: false },
	{ input: /a/, expected: false },
];


describe('Function.isFunction', () => {
	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				isFunction(test.input) === test.expected ? null : new Error()
			)
		);
	});
});
