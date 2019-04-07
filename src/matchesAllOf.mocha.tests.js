/* eslint-env mocha */

const Vet = require('./');
const { matchesAllOf } = Vet;

const TESTS = [
	{ input: 'a string', expected: true },

	{ input: true, expected: false },
	{ input: '', expected: false },
	{ input: false, expected: false },
	{ input: (() => {}), expected: false },
	{ input: {}, expected: false },
	{ input: [], expected: false },
	{ input: /a/, expected: false },
	{ input: undefined, expected: false },
	{ input: null, expected: false },
];


describe('vet/matchesAllOf', () => {

	const validator = matchesAllOf(
		(val) => typeof val === 'string' || val instanceof String,
		(val) => val.length > 0
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
