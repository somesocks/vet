
import inspect from 'object-inspect';

import isNotUndefined from './isNotUndefined.js';

const TESTS = [
	{ input: false, expected: true },
	{ input: (() => {}), expected: true },
	{ input: 'a string', expected: true },
	{ input: {}, expected: true },
	{ input: [], expected: true },
	{ input: /a/, expected: true },
	{ input: true, expected: true },
	{ input: '', expected: true },
	{ input: null, expected: true },

	{ input: undefined, expected: false },
];


describe('vet/isNotUndefined', () => {

	const _validator = isNotUndefined;
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
