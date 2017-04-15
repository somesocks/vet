/* eslint-env mocha */

const isNull = require('./isNull');

const TESTS = [
	{ input: null, expected: true },

	{ input: false, expected: false },
	{ input: (() => {}), expected: false },
	{ input: 'a string', expected: false },
	{ input: {}, expected: false },
	{ input: [], expected: false },
	{ input: /a/, expected: false },
	{ input: true, expected: false },
	{ input: '', expected: false },
	{ input: undefined, expected: false },
];


describe('Base.isNull', () => {

	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				isNull(test.input) === test.expected ? null : new Error()
			)
		);
	});
});
