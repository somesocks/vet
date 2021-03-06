

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

const SHOULD_FAIL = [
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

const _isPerson = isAllOf(
	isShape({
		name: isString,
	}),
	isShape({
		email: isString,
	})
);
const isPerson : typeof _isPerson = _isPerson;


const _validator = isAllOf(
  isString,
  isNotEmpty
);
const validator : typeof _validator = _validator;

const SHOULD_PASS_2 = [
	{ input: { name: 'foo', email: 'foo' }, expected: false },
];

const SHOULD_FAIL_2 = [
	{ input: { name: 'foo' }, expected: false },
	{ input: { email : 'bar' }, expected: false },
];


describe('vet/isAllOf', () => {

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

	const validator2 = threwError(validator.assert);

	SHOULD_FAIL.forEach((test) => {
		it(
			`assert (${test.input}) should fail`,
			(done) => done(
				validator2(test.input) ? null : new Error()
			)
		);
	});

	SHOULD_PASS_2.forEach((test) => {
		it(
			`assert (${test.input}) should pass`,
			(done) => done(
				threwNoError(isPerson.assert)(test.input) ? null : new Error()
			)
		);
	});

	SHOULD_FAIL_2.forEach((test) => {
		it(
			`assert (${test.input}) should fail`,
			(done) => done(
				threwError(isPerson.assert)(test.input) ? null : new Error()
			)
		);
	});

});


// typescript check
let a = {
  name: 'bob',
  email: 'bob@',
} as any;

isPerson.assert(a);

let b = a;
b.name;
b.email;
