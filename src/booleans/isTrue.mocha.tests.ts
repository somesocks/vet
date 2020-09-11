

import isTrue from './isTrue';

const TESTS = [
	{ input: true, expected: true },

	{ input: false, expected: false },
	{ input: (() => {}), expected: false },
	{ input: '', expected: false },
	{ input: 'a string', expected: false },
	{ input: undefined, expected: false },
	{ input: null, expected: false },
	{ input: {}, expected: false },
	{ input: [], expected: false },
	{ input: /a/, expected: false },
];


describe('vet/booleans/isTrue', () => {
	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				isTrue(test.input) === test.expected ? null : new Error()
			)
		);
	});
});

// typescript check
let a = true;
isTrue.assert(a);
let b = a;
