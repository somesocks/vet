

import inspect from 'object-inspect';


import isString from '../strings/isString';
import isArrayOf from './isArrayOf';

const TESTS = [
	{ input: [ 'a string' ], expected: true },
	{ input: [ '' ], expected: true },
	{ input: [ true ], expected: true },
	{ input: [ false ], expected: true },
	{ input: [ (() => {}) ], expected: true },
	{ input: [ {} ], expected: true },
	{ input: [ /a/ ], expected: true },
	{ input: [ 1, 2, 3 ], expected: true },
	{ input: [], expected: true },

	{ input: [ 1, 2, null ], expected: false },
	{ input: [ undefined ], expected: false },
	{ input: [ null ], expected: false },
	{ input: 'a string', expected: false },
	{ input: '', expected: false },
	{ input: undefined, expected: false },
	{ input: null, expected: false },
	{ input: true, expected: false },
	{ input: false, expected: false },
	{ input: (() => {}), expected: false },
	{ input: {}, expected: false },
	{ input: /a/, expected: false },
];


describe('vet/arrays/isArrayOf', () => {

	const _validator = isArrayOf(
    ((val) => val != null)
  );
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