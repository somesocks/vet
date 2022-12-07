
import inspect from 'object-inspect';

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


describe('vet/isOneOf 1', () => {
	const _validator = isOneOf(true, '');
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


	const _validator2 = isOneOf((val) => val === true, (val) => val === '');
	const validator2 : typeof _validator2 = _validator2;

});

describe('vet/isOneOf 2', () => {
	const _validator = isOneOf((val) => val === true, (val) => val === '');
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

{
	const _validator = isOneOf(true, '');
	const validator : typeof _validator = _validator;
	
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
}
