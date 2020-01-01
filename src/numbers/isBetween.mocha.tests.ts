

import isBetween from './isBetween';


const TESTS = [
	{ input: 1, expected: true },
	{ input: Number.EPSILON, expected: true },
	{ input: Number.MAX_SAFE_INTEGER, expected: false },
	{ input: Number.MAX_VALUE, expected: false },
	{ input: Number.MIN_VALUE, expected: true },
	{ input: Number.POSITIVE_INFINITY, expected: false },

	{ input: 0, expected: false },
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


describe('vet/numbers/isBetween', () => {
	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				isBetween(0, 100)(test.input) === test.expected ? null : new Error()
			)
		);
	});
});
