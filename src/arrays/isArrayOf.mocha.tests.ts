
import { Validator } from '../types';

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

	const validator = isArrayOf(
    ((val) => val != null)
  );

	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				validator(test.input) === test.expected ? null : new Error()
			)
		);
	});
});


//typescript checks
const _isStringArray = isArrayOf(isString);
const isStringArray : typeof _isStringArray = _isStringArray;

let a = [ 'foo' ];
isStringArray.assert(a);
a[0] = 'bar';
