

import isNotNull from './isNotNull';

const TESTS = [
	{ input: false, expected: true },
	{ input: (() => {}), expected: true },
	{ input: 'a string', expected: true },
	{ input: {}, expected: true },
	{ input: [], expected: true },
	{ input: /a/, expected: true },
	{ input: undefined, expected: true },
	{ input: true, expected: true },
	{ input: '', expected: true },

	{ input: null, expected: false },
];


describe('vet/isNotNull', () => {

	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				isNotNull(test.input) === test.expected ? null : new Error()
			)
		);
	});
});
