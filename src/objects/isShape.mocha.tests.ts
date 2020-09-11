

import isString from '../strings/isString';
import isNumber from '../numbers/isNumber';
import isBoolean from '../booleans/isBoolean';
import optional from '../optional';
import isAllOf from '../isAllOf';
import isOneOf from '../isOneOf';
import isShape from './isShape';

const TESTS = [
	{
		input: {
			name: 'Test User',
			age: 10,
			verified: true,
		},

		expected: true,
	},

	{
		input: {
			name: 'Test User',
			age: 10,
			verified: true,
			optional: true,
		},

		expected: true,
	},

	{
		input: {
			name: 'Test User',
			age: 10,
			verified: true,
			optional: false,
		},

		expected: true,
	},

	{
		input: {
			name: 'Test User',
			age: 10,
			verified: true,
			optional: null,
		},

		expected: true,
	},

	{
		input: {
			name: 'Test User',
			age: 10,
			verified: true,
			optional: undefined,
		},

		expected: true,
	},

	{
		input: {
			name: 'Test User',
			age: 10,
			verified: true,
			extras: {},
		},

		expected: true,
	},

	{
		input: {
			name: 'Test User',
			age: 10,
		},

		expected: false,
	},

	{
		input: {
			name: 1,
			age: 10,
			verified: true,
		},

		expected: false,
	},


	{ input: '', expected: false },
	{ input: 'a string', expected: false },
	{ input: {}, expected: false },
	{ input: [], expected: false },
	{ input: () => {}, expected: false },
	{ input: /a/, expected: false },
	{ input: undefined, expected: false },
	{ input: null, expected: false },
	{ input: 0, expected: false },
	{ input: false, expected: false },
	{ input: true, expected: false },
];

const FAIL = [
	{
		input: {
			name: 'Test User',
			age: 10,
		},

		expected: false,
	},

	{
		input: {
			name: 1,
			age: 10,
			verified: true,
		},

		expected: false,
	},

	{
		input: {
			name: 'Test User',
			age: 9,
			verified: true,
			extras: {},
		},

		expected: false,
	},

	{ input: '', expected: false },
	{ input: 'a string', expected: false },
	{ input: {}, expected: false },
	{ input: [], expected: false },
	{ input: () => {}, expected: false },
	{ input: /a/, expected: false },
	{ input: undefined, expected: false },
	{ input: null, expected: false },
	{ input: 0, expected: false },
	{ input: false, expected: false },
	{ input: true, expected: false },
];

const _validator = isShape({
  name: isString,
  age: isAllOf(
    isNumber,
    function isOverNine(val) { return val > 9; }
  ),
  verified: isBoolean,
  optional: optional(isBoolean),
  optional2: optional(isOneOf(isString, isNumber)),
});

const validator : typeof _validator = _validator;

describe('vet/objects/isShape', () => {

	// console.log('validator schema', validator.schema);

	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				validator(test.input) === test.expected ? null : new Error()
			)
		);
	});

	const threwError = (validator) => (...args) => {
		try {
			validator(...args);
			return false;
		} catch (e) {
			console.log('assert error', e);
			return true;
		}
	};

	const validator2 = threwError(validator.assert);

	FAIL.forEach((test) => {
		it(
			`assert (${test.input}) should fail`,
			(done) => done(
				validator2(test.input) ? null : new Error()
			)
		);
	});


});


// compile time check for isShape
const _isPerson = isShape({
  name: isString,
  age: isNumber,
  contact: {
    email: isString,
    phone: isString,
  },
});
const isPerson : typeof _isPerson = _isPerson;
let a = {
  name: 'bob',
  age: 20,
  contact: {
    email: '',
    phone: '',
  },
} ;
isPerson.assert(a);
a.age = 2;
