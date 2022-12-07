

import optional from './optional';
import isString from './strings/isString';
import { Validator } from './types';

const TESTS = [
	{ input: 'a string', expected: true },
	{ input: '', expected: true },
	{ input: undefined, expected: true },
	
	{ input: null, expected: false },
	{ input: true, expected: false },
	{ input: false, expected: false },
	{ input: (() => {}), expected: false },
	{ input: {}, expected: false },
	{ input: [], expected: false },
	{ input: /a/, expected: false },
];

const SHOULD_PASS = [
	{ input: 'a string', expected: true },
	{ input: '', expected: true },
	{ input: undefined, expected: true },
];

const SHOULD_FAIL = [
	{ input: null, expected: false },
	{ input: true, expected: false },
	{ input: false, expected: false },
	{ input: (() => {}), expected: false },
	{ input: {}, expected: false },
	{ input: [], expected: false },
	{ input: /a/, expected: false },
];


const _validator = optional(
	function isString(val) { return typeof val === 'string' || val instanceof String; }
);
const validator : typeof _validator = _validator;

describe('vet/optional', () => {

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

	const threwNoError = (validator) => (...args) => {
		try {
			validator(...args);
			return true;
		} catch (e) {
			console.log('assert error', e);
			return false;
		}
	};

	SHOULD_PASS.forEach((test) => {
		it(
			`assert (${test.input}) should pass`,
			(done) => done(
				threwNoError(validator.assert)(test.input) ? null : new Error()
			)
		);
	});

	SHOULD_FAIL.forEach((test) => {
		it(
			`assert (${test.input}) should fail`,
			(done) => done(
				threwError(validator.assert)(test.input) ? null : new Error()
			)
		);
	});

});

// typescript check
let a = optional(isString);
let b = optional(val => val > 0)
a('foo');
b('foo');
