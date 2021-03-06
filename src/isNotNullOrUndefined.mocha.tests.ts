

import isNotNullOrUndefined from './isNotNullOrUndefined';

const TESTS = [
	{ input: false, expected: true },
	{ input: (() => {}), expected: true },
	{ input: 'a string', expected: true },
	{ input: {}, expected: true },
	{ input: [], expected: true },
	{ input: /a/, expected: true },
	{ input: true, expected: true },
	{ input: '', expected: true },

	{ input: undefined, expected: false },
	{ input: null, expected: false },
];


describe('vet/isNotNullOrUndefined', () => {

	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				isNotNullOrUndefined(test.input) === test.expected ? null : new Error()
			)
		);
	});
});
