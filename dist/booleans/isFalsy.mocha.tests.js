/* eslint-env mocha */

const Vet = require('../');
const { isFalsy } = Vet.Boolean;

const TESTS = [
	{ input: false, expected: true },
	{ input: '', expected: true },
	{ input: undefined, expected: true },
	{ input: null, expected: true },

	{ input: true, expected: false },
	{ input: {}, expected: false },
	{ input: [], expected: false },
	{ input: (() => {}), expected: false },
	{ input: 'a string', expected: false },
	{ input: /a/, expected: false },
];


describe('vet/booleans/isFalsy', () => {

	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				isFalsy(test.input) === test.expected ? null : new Error()
			)
		);
	});
});
