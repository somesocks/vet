

import inspect from 'object-inspect';

import isObjectOf from './isObjectOf';
import isNumber from '../numbers/isNumber';

const TESTS = [
	{ input: { a: 'a string' }, expected: true },
	{ input: { a: '' }, expected: true },
	{ input: { a: true }, expected: true },
	{ input: { a: false }, expected: true },
	{ input: { a: (() => {}) }, expected: true },
	{ input: { a: {} }, expected: true },
	{ input: { a: /a/ }, expected: true },
	{ input: { a: 1, b: 2, c: 3 }, expected: true },
	{ input: {}, expected: true },
	{ input: [], expected: true },
	{ input: [ 1, 2, 3 ], expected: true },
	{ input: (() => {}), expected: true },
	{ input: /a/, expected: true },

	{ input: { a: 1, b: 2, c: null }, expected: false },
	{ input: { a: undefined }, expected: false },
	{ input: { a: null }, expected: false },
	{ input: 'a string', expected: false },
	{ input: '', expected: false },
	{ input: undefined, expected: false },
	{ input: null, expected: false },
	{ input: true, expected: false },
	{ input: false, expected: false },
];

describe('vet/objects/isObjectOf', () => {
	
	const _validator = isObjectOf((val) => val != null);
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


// compile time check for isObjectOf
const _isObjectOfNumbers = isObjectOf(isNumber);
const isObjectOfNumbers : typeof _isObjectOfNumbers = _isObjectOfNumbers;
let a = {} ;
isObjectOfNumbers.assert(a);
a.foo = 2;
