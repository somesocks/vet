

import isProbablyDataURL from './isProbablyDataURL';

const TESTS = [
	{ input: `data:text/plain;charset=utf-8;base64,MTIz`, expected: true },

	{ input: 'http://www.test.com', expected: false },
	{ input: 'https://www.test.com', expected: false },
	{ input: 'http://test.com', expected: false },
	{ input: 'https://test.com', expected: false },

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

describe('vet/strings/isProbablyDataURL', () => {
	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				isProbablyDataURL(test.input) === test.expected ? null : new Error()
			)
		);
	});
});
