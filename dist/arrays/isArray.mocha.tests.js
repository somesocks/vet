/* eslint-env mocha */

const Vet = require('../');
const { isArray } = Vet;

const TESTS = [
	{ input: [], expected: true },

	{ input: 'a string', expected: false },
	{ input: '', expected: false },
	{ input: undefined, expected: false },
	{ input: null, expected: false },
	{ input: true, expected: false },
	{ input: false, expected: false },
	{ input: (() => {}), expected: false },
	{ input: {}, expected: false },
	{ input: /a/, expected: false },
];


describe('Array.isArray', () => {

	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				isArray(test.input) === test.expected ? null : new Error()
			)
		);
	});
});
