

import inspect from 'object-inspect';

import isString from '../strings/isString';
import isNumber from '../numbers/isNumber';
import isBoolean from '../booleans/isBoolean';
import optional from '../optional';
import isAllOf from '../isAllOf';
import isOneOf from '../isOneOf';
import isShape from './isShape';
import isArrayOf from '../arrays/isArrayOf';
import isDate from '../dates/isDate';


import ValidatorType from '../types/ValidatorType';

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

		expected: true,
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

	{ input: {}, expected: true },
	{ input: [], expected: true },
	{ input: () => {}, expected: true },
	{ input: /a/, expected: true },

	{ input: undefined, expected: false },
	{ input: null, expected: false },
	{ input: 0, expected: false },
	{ input: false, expected: false },
	{ input: true, expected: false },
];


describe('vet/objects/isShape.partial', () => {

	const _validator = isShape.partial(
		{
			name: isString,
			age: isAllOf(
				isNumber,
				function isOverNine(val) { return val > 9; }
			),
			verified: isBoolean,
			optional: optional(isBoolean),
			optional2: optional(isOneOf(isString, isNumber)),
		}
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


// type checking utilities
type IfEquals<T, U, Y=unknown, N=never> =
  (<G>() => G extends T ? 1 : 2) extends
  (<G>() => G extends U ? 1 : 2) ? Y : N;

/** Trigger a compiler error when a value is _not_ an exact type. */
const exactType : <T, U>(
  draft : T & IfEquals<T, U>,
  expected : U & IfEquals<T, U>
) => IfEquals<T, U> = (() => {}) as any;

// compile time type check.
// recursive objects in schema should flatten out to a simple object schema
type _typeA = {
	name ?: string | undefined,
	contact ?: {
		email ?: string | undefined,
		phoneNumber ?: string | undefined,
	} | undefined,
};

const _isA = isShape.partial({
	name: isString,
	contact: {
		email: optional(isString),
		phoneNumber: optional(isString),
	},
});

type _typeA2 = ValidatorType<typeof _isA>;

exactType({} as _typeA, {} as _typeA2);


// compile time type check.
// recursive `isShape` calls should flatten out to a simple object schema
type _typeB = {
	name ?: string | undefined,
	contact ?: {
		email ?: string | undefined,
		phoneNumber ?: string | undefined,
	} | undefined,
};

const _isB = isShape.partial({
	name: isString,
	contact: isShape({
		email: optional(isString),
		phoneNumber: optional(isString),
	}),
});

type _typeB2 = ValidatorType<typeof _isB>;

exactType({} as _typeB, {} as _typeB2);


// compile time type check.
// isArrayOf `isShape` calls should flatten out to a simple schema
type _typeC = {
	name ?: string | undefined,
	contact ?: ({
		email ?: string | undefined,
		phoneNumber ?: string | undefined,
	}[]) | undefined,
};

const _isC = isShape.partial({
	name: isString,
	contact: isArrayOf(
		isShape({
			email: optional(isString),
			phoneNumber: optional(isString),
		}),
	),
});

type _typeC2 = ValidatorType<typeof _isC>;

exactType({} as _typeC, {} as _typeC2);


type _typeD = {
  name ?: string | undefined,
  DOB ?: Date | undefined,
};

const _isD = isShape.partial({
	name : isString,
  DOB : isDate,
});

type _typeD2 = ValidatorType<typeof _isD>;

exactType({} as _typeD, {} as _typeD2);
