

import isObject from './isObject';

const TESTS = [
	{ input: {}, expected: true },
	{ input: [], expected: true },
	{ input: () => {}, expected: true },
	{ input: /a/, expected: true },

	{ input: '', expected: false },
	{ input: 'a string', expected: false },
	{ input: undefined, expected: false },
	{ input: null, expected: false },
	{ input: 0, expected: false },
	{ input: false, expected: false },
	{ input: true, expected: false },
];


describe('vet/objects/isObject', () => {
	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				isObject(test.input) === test.expected ? null : new Error()
			)
		);
	});
});
