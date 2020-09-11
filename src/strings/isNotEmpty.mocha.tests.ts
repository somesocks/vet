

import isNotEmpty from './isNotEmpty';

const TESTS = [
	{ input: 'a string', expected: true },

	{ input: '', expected: false },
	{ input: undefined, expected: false },
	{ input: null, expected: false },
	{ input: 0, expected: false },
	{ input: false, expected: false },
	{ input: true, expected: false },
	{ input: {}, expected: false },
	{ input: [], expected: false },
	{ input: () => {}, expected: false },
	{ input: /a/, expected: false },
];

describe('vet/strings/isNotEmpty', () => {
	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				isNotEmpty(test.input) === test.expected ? null : new Error()
			)
		);
	});
});

// typescript compile-time check
let a = "foo";
isNotEmpty.assert(a);
a = '';
a = 'foo';
// a = 1;
