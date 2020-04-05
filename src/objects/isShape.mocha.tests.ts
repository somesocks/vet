

import isString from '../strings/isString';
import isNumber from '../numbers/isNumber';
import isBoolean from '../booleans/isBoolean';
import optional from '../optional';
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

describe('vet/objects/isShape', () => {
	const validator = isShape({
		name: isString,
		age: isNumber,
		verified: isBoolean,
		optional: optional(isBoolean),
	});

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
