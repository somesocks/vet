/* eslint-env mocha */

const matchesOneOf = require('./matchesOneOf');

const TESTS = [
	{ input: 'a string', expected: true },
	{ input: true, expected: true },
	{ input: '', expected: true },

	{ input: false, expected: false },
	{ input: (() => {}), expected: false },
	{ input: {}, expected: false },
	{ input: [], expected: false },
	{ input: /a/, expected: false },
	{ input: undefined, expected: false },
	{ input: null, expected: false },
];


describe('Base.matchesOneOf', () => {

	const validator = matchesOneOf(
		(val) => typeof val === 'string' || val instanceof String,
		(val) => val === true
	);

	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				validator(test.input) === test.expected ? null : new Error()
			)
		);
	});
});
