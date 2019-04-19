/* eslint-env mocha */

const Vet = require('./');
const { matchesNoneOf } = Vet;

const TESTS = [
	{ input: false, expected: true },
	{ input: (() => {}), expected: true },
	{ input: {}, expected: true },
	{ input: [], expected: true },
	{ input: /a/, expected: true },
	{ input: undefined, expected: true },
	{ input: null, expected: true },

	{ input: 'a string', expected: false },
	{ input: true, expected: false },
	{ input: '', expected: false },
];


describe('vet/matchesNoneOf', () => {

	const validator = matchesNoneOf(
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