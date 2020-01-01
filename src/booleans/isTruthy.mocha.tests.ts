

import isTruthy from './isTruthy';

const TESTS = [
	{ input: true, expected: true },
	{ input: (() => {}), expected: true },
	{ input: 'a string', expected: true },
	{ input: /a/, expected: true },
	{ input: {}, expected: true },
	{ input: [], expected: true },

	{ input: false, expected: false },
	{ input: '', expected: false },
	{ input: undefined, expected: false },
	{ input: null, expected: false },
];


describe('vet/booleans/isTruthy', () => {

	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				isTruthy(test.input) === test.expected ? null : new Error()
			)
		);
	});
});
