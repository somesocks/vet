

import isNotUndefined from './isNotUndefined';

const TESTS = [
	{ input: false, expected: true },
	{ input: (() => {}), expected: true },
	{ input: 'a string', expected: true },
	{ input: {}, expected: true },
	{ input: [], expected: true },
	{ input: /a/, expected: true },
	{ input: true, expected: true },
	{ input: '', expected: true },
	{ input: null, expected: true },

	{ input: undefined, expected: false },
];


describe('vet/isNotUndefined', () => {

	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				isNotUndefined(test.input) === test.expected ? null : new Error()
			)
		);
	});
});
