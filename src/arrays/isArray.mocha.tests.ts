

import isArray from './isArray';

const TESTS = [
	{ input: [], expected: true },

	{ input: 'a string', expected: false },
	{ input: '', expected: false },
	{ input: undefined, expected: false },
	{ input: null, expected: false },
	{ input: true, expected: false },
	{ input: false, expected: false },
	{ input: (() => {}), expected: false },
	{ input: {}, expected: false },
	{ input: /a/, expected: false },
];


describe('vet/arrays/isArray', () => {

	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				isArray(test.input) === test.expected ? null : new Error()
			)
		);
	});
});
