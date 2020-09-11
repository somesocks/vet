

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

	const validator = isObjectOf((val) => val != null);

	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				validator(test.input) === test.expected ? null : new Error()
			)
		);
	});
});


// compile time check for isObjectOf
const _isObjectOfNumbers = isObjectOf(isNumber);
const isObjectOfNumbers : typeof _isObjectOfNumbers = _isObjectOfNumbers;
let a = {} ;
isObjectOfNumbers.assert(a);
a.foo = 2;
