/* eslint-env mocha */

const isNullOrUndefined = require('./isNullOrUndefined');

const TESTS = [
	{ input: null, expected: true },
	{ input: undefined, expected: true },

	{ input: false, expected: false },
	{ input: (() => {}), expected: false },
	{ input: 'a string', expected: false },
	{ input: {}, expected: false },
	{ input: [], expected: false },
	{ input: /a/, expected: false },
	{ input: true, expected: false },
	{ input: '', expected: false },
];


describe('Base.isNullOrUndefined', () => {

	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				isNullOrUndefined(test.input) === test.expected ? null : new Error()
			)
		);
	});
});
