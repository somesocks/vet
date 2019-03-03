/* eslint-env mocha */

const Vet = require('../');
const { isString } = Vet;
const { returns } = Vet.Utils;

const TESTS = [
	{ input: undefined, expected: true },
	{ input: null, expected: true },
	{ input: 0, expected: true },
	{ input: false, expected: true },
	{ input: true, expected: true },
	{ input: {}, expected: true },
	{ input: [], expected: true },
	{ input: () => {}, expected: true },
	{ input: /a/, expected: true },

	{ input: '', expected: false },
	{ input: 'a string', expected: false },
];

describe('Utils.returns', () => {

	const threwError = (validator) => (...args) => {
		try {
			validator(...args);
			return false;
		} catch (e) {
			return true;
		}
	};

	const PASS = (a) => a;

	const wrapper = returns(PASS, isString);

	const validator = threwError(wrapper);

	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				validator(test.input) === test.expected ? null : new Error()
			)
		);
	});
});
