



import inspect from 'object-inspect';

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

	const _validator = isTruthy;
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

