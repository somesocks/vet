/* eslint-env mocha */

const Vet = require('../');
const { isFunction } = Vet.Function;

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


describe('vet/functions/isFunction', () => {
	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				isFunction(test.input) === test.expected ? null : new Error()
			)
		);
	});
});
