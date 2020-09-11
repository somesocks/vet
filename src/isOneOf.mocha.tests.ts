

import isOneOf from './isOneOf';
import isAllOf from './isAllOf';
import isString from './strings/isString';
import isNumber from './numbers/isNumber';
import isShape from './objects/isShape';
import isArrayOf from './arrays/isArrayOf';

import { ValidatorType } from './types';

const TESTS = [
	{ input: true, expected: true },
	{ input: '', expected: true },

	{ input: false, expected: false },
	{ input: (() => {}), expected: false },
	{ input: 'a string', expected: false },
	{ input: {}, expected: false },
	{ input: [], expected: false },
	{ input: /a/, expected: false },
	{ input: undefined, expected: false },
	{ input: null, expected: false },
];

const _validator = isOneOf(true, '');
const validator : typeof _validator = _validator;

describe('vet/isOneOf', () => {

	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				validator(test.input) === test.expected ? null : new Error()
			)
		);
	});

	const validator2 = isOneOf((val) => val === true, (val) => val === '');

	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				validator2(test.input) === test.expected ? null : new Error()
			)
		);
	});
});


// typescript check
let a = '' as any;
validator.assert(a);
let b = a;
b = '';
b = true;

let isPersonReference = isOneOf(isString, isShape({ name: isString }));
let isPerson = isAllOf(isPersonReference, isShape({ age: isNumber }));

let c = {};
if (isPersonReference(c)) {
  let d = c;
}
if (isPerson(c)) {
  let d = c;
}
