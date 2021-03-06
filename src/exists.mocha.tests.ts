

import exists from './exists';

const TESTS = [
	{ input: true, expected: true },
	{ input: false, expected: true },
	{ input: (() => {}), expected: true },
	{ input: '', expected: true },
	{ input: 'a string', expected: true },
	{ input: {}, expected: true },
	{ input: [], expected: true },
	{ input: /a/, expected: true },

	{ input: undefined, expected: false },
	{ input: null, expected: false },
];


describe('vet/equals', () => {

	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				exists(test.input) === test.expected ? null : new Error()
			)
		);
	});
});
