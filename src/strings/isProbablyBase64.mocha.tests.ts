

import isProbablyBase64 from './isProbablyBase64';

const TESTS = [
	{ input: 'MQ==', expected: true },
	{ input: 'MTI=', expected: true },
	{ input: 'MTIz', expected: true },
	{ input: '', expected: true },

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

describe('vet/strings/isProbablyBase64', () => {
	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				isProbablyBase64(test.input) === test.expected ? null : new Error()
			)
		);
	});
});
