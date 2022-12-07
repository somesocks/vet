
import inspect from 'object-inspect';

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

	const _validator = exists;
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
