

import isNot from './isNot';
import isNumber from './numbers/isNumber';

const TESTS = [
	{ input: '', expected: true },
	{ input: 'a string', expected: true },
	{ input: undefined, expected: true },
	{ input: null, expected: true },
	{ input: false, expected: true },
	{ input: true, expected: true },
	{ input: {}, expected: true },
	{ input: [], expected: true },
	{ input: () => {}, expected: true },
	{ input: /a/, expected: true },

	{ input: 0, expected: false },
	{ input: 1, expected: false },
	{ input: Number.NaN, expected: false },
	{ input: Number.EPSILON, expected: false },
	{ input: Number.MAX_SAFE_INTEGER, expected: false },
	{ input: Number.MIN_SAFE_INTEGER, expected: false },
	{ input: Number.MAX_VALUE, expected: false },
	{ input: Number.MIN_VALUE, expected: false },
	{ input: Number.NEGATIVE_INFINITY, expected: false },
	{ input: Number.POSITIVE_INFINITY, expected: false },
];


describe('vet/isNot', () => {
	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				isNot(isNumber)(test.input) === test.expected ? null : new Error()
			)
		);
	});
});
