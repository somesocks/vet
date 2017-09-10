/* eslint-env mocha */

const Vet = require('../../dist');
const { isUndefined } = Vet;

const TESTS = [
	{ input: undefined, expected: true },

	{ input: false, expected: false },
	{ input: (() => {}), expected: false },
	{ input: 'a string', expected: false },
	{ input: {}, expected: false },
	{ input: [], expected: false },
	{ input: /a/, expected: false },
	{ input: true, expected: false },
	{ input: '', expected: false },
	{ input: null, expected: false },
];


describe('Base.isUndefined', () => {

	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				isUndefined(test.input) === test.expected ? null : new Error()
			)
		);
	});
});
