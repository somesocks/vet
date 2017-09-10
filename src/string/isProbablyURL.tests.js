/* eslint-env mocha */

const Vet = require('../../dist');
const { isProbablyURL } = Vet.String;

const TESTS = [
	{ input: 'http://www.test.com', expected: true },
	{ input: 'https://www.test.com', expected: true },
	{ input: 'http://test.com', expected: true },
	{ input: 'https://test.com', expected: true },

	{ input: '', expected: false },
	{ input: 'a string', expected: false },
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

describe('String.isProbablyURL', () => {
	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				isProbablyURL(test.input) === test.expected ? null : new Error()
			)
		);
	});
});
