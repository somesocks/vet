
import Assertion from '../types/Assertion';
import Validator from '../types/Validator';
import ExtendedValidator from '../types/ExtendedValidator';

import assert from '../utils/assert';

import isNumber from './isNumber';

/**
* construct a validator to check if a value is between two numbers
* @param {number} lower - the lower boundary value to check against
* @param {number} upper - the upper boundary value to check against
* @returns {function} - a validator function
* @memberof vet.numbers
*/
function isBetween(lower : number, upper : number) : ExtendedValidator {
	const res : ExtendedValidator = function (val) {
		return isNumber(val) && val > lower && val < upper;
	} as ExtendedValidator;

	res.assert = assert(res);

	return res;
}

/**
* @name exclusive
* @param {number} lower - the lower boundary value to check against
* @param {number} upper - the upper boundary value to check against
* @returns {function} - a validator function
* @memberof vet.numbers.isBetween
*/
isBetween.exclusive = function exclusive(lower : number, upper : number) : ExtendedValidator {
	const res : ExtendedValidator = function (val) {
		return isNumber(val) && val > lower && val < upper;
	} as ExtendedValidator;

	res.assert = assert(res);

	return res;
};


/**
* @name inclusive
* @param {number} lower - the lower boundary value to check against
* @param {number} upper - the upper boundary value to check against
* @returns {function} - a validator function
* @memberof vet.numbers.isBetween
*/
isBetween.inclusive = function inclusive(lower : number, upper : number) : ExtendedValidator {
	const res : ExtendedValidator = function (val) {
		return isNumber(val) && val >= lower && val <= upper;
	} as ExtendedValidator;

	res.assert = assert(res);

	return res;
};

export = isBetween;
