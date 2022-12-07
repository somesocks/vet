

import isString from '../strings/isString';
import isNumber from '../numbers/isNumber';
import isShape from '../objects/isShape';
import returns from './returns';

const TESTS = [
	{ input: undefined, expected: true },
	{ input: null, expected: true },
	{ input: 0, expected: true },
	{ input: false, expected: true },
	{ input: true, expected: true },
	{ input: {}, expected: true },
	{ input: [], expected: true },
	{ input: () => {}, expected: true },
	{ input: /a/, expected: true },

	{ input: '', expected: false },
	{ input: 'a string', expected: false },
];

describe('vet/functions/returns', () => {

	const threwError = (validator) => (...args) => {
		try {
			validator(...args);
			return false;
		} catch (e) {
			return true;
		}
	};

	const PASS = (a) => a;

	const wrapper = returns(PASS, isString);

	const validator = threwError(wrapper);

	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				validator(test.input) === test.expected ? null : new Error()
			)
		);
	});
});


// typescript check
let add = (a : number, b : number) => ({ sum: a + b });
let add2 = returns(add, isShape({ diff: isNumber }));
let add3 = returns(add, (val) => val > 0);
// let c = add2(1, 2);
