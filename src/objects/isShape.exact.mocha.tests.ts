
import inspect from 'object-inspect';

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
			extras: {},
		},

		expected: false,
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


describe('vet/objects/isShape.exact', () => {

	const _validator = isShape.exact({
		name: isString,
		age: isNumber,
		verified: isBoolean,
	});

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
