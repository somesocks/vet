/* eslint-env mocha */

const Vet = require('../');
const { isBoolean } = Vet.Boolean;

const TESTS = [
	{ input: false, expected: true },
	{ input: true, expected: true },

	{ input: (() => {}), expected: false },
	{ input: '', expected: false },
	{ input: 'a string', expected: false },
	{ input: undefined, expected: false },
	{ input: null, expected: false },
	{ input: {}, expected: false },
	{ input: [], expected: false },
	{ input: /a/, expected: false },
];


describe('Boolean.isBoolean', () => {
	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				isBoolean(test.input) === test.expected ? null : new Error()
			)
		);
	});
});
