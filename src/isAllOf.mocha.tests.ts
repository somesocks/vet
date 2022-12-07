

import inspect from 'object-inspect';

import isAllOf from './isAllOf';

import isShape from './objects/isShape';
import isString from './strings/isString';
import isNotEmpty from './strings/isNotEmpty';

const TESTS = [
	{ input: 'a string', expected: true },

	{ input: true, expected: false },
	{ input: '', expected: false },
	{ input: false, expected: false },
	{ input: (() => {}), expected: false },
	{ input: {}, expected: false },
	{ input: [], expected: false },
	{ input: /a/, expected: false },
	{ input: undefined, expected: false },
	{ input: null, expected: false },
];

describe('vet/isAllOf 1', () => {

	const _validator = isAllOf(
		isString,
		isNotEmpty
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





const TESTS_2 = [
	{ input: { name: 'foo', email: 'foo' }, expected: true },
	{ input: { name: 'foo' }, expected: false },
	{ input: { email : 'bar' }, expected: false },
];

describe('vet/isAllOf 2', () => {

	const _validator = isAllOf(
		isShape({
			name: isString,
		}),	
		isShape({
			email: isString,
		})	
	);	
	const validator : typeof _validator = _validator;
		
	TESTS_2.forEach((test) => {
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
