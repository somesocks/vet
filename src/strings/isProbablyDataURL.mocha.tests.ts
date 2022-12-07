
import inspect from 'object-inspect';

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

	const _validator = isProbablyDataURL;
	const validator : typeof _validator = _validator;

	TESTS.forEach((test) => {
		it(
			`validator(${inspect(test.input)}) returns ${test.expected}`,
			(done) => done(
				validator(test.input) === test.expected ? null : new Error()
			)
		);

		it(
			`validator.assert(${inspect(test.input)}) should ${test.expected ? 'pass' : 'fail'}`,
			(done) => {
				let error = false;
				try {
					validator.assert(test.input);
				} catch (e) {
					error = true;
				}

				//no error should be thrown if a expected is expected
				done(!error == test.expected ? null : new Error());	
			}
		);
	});

});
