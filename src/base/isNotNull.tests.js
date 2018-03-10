/* eslint-env mocha */

const Vet = require('../../dist/vet');
const { isNotNull } = Vet;

const TESTS = [
	{ input: false, expected: true },
	{ input: (() => {}), expected: true },
	{ input: 'a string', expected: true },
	{ input: {}, expected: true },
	{ input: [], expected: true },
	{ input: /a/, expected: true },
	{ input: undefined, expected: true },
	{ input: true, expected: true },
	{ input: '', expected: true },

	{ input: null, expected: false },
];


describe('Base.isNotNull', () => {

	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				isNotNull(test.input) === test.expected ? null : new Error()
			)
		);
	});
});
