

import isString from '../strings/isString';
import isShape from '../objects/isShape';
import assert from './assert';

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

describe('vet/utils/assert', () => {

	const threwError = (validator) => (...args) => {
		try {
			validator(...args);
			return false;
		} catch (e) {
			console.log('assert error', e);
			return true;
		}
	};

	const validator = threwError(assert(isString));

	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				validator(test.input) === test.expected ? null : new Error()
			)
		);
	});

	it('immediate mode test', () => {
		assert(2 > 1, 'passed');
	});

	it('immediate mode test 2', () => {
		let err;

		try {
			assert(1 > 2, 'one is not greater than 2');
		} catch (e) {
			err = e;
		}

		assert(err != null);
		assert(err instanceof Error);
		assert(err.message === 'one is not greater than 2');
	});

});
