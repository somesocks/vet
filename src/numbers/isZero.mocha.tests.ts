

import isZero from './isZero';

const TESTS = [
	{ input: 0, expected: true },

	{ input: 1, expected: false },
	{ input: Number.EPSILON, expected: false },
	{ input: Number.MAX_SAFE_INTEGER, expected: false },
	{ input: Number.MAX_VALUE, expected: false },
	{ input: Number.MIN_VALUE, expected: false },
	{ input: Number.POSITIVE_INFINITY, expected: false },
	{ input: Number.NaN, expected: false },
	{ input: Number.MIN_SAFE_INTEGER, expected: false },
	{ input: Number.NEGATIVE_INFINITY, expected: false },

	{ input: '', expected: false },
	{ input: 'a string', expected: false },
	{ input: undefined, expected: false },
	{ input: null, expected: false },
	{ input: false, expected: false },
	{ input: true, expected: false },
	{ input: {}, expected: false },
	{ input: [], expected: false },
	{ input: () => {}, expected: false },
	{ input: /a/, expected: false },
];


describe('vet/numbers/isZero', () => {
	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				isZero(test.input) === test.expected ? null : new Error()
			)
		);
	});
});
