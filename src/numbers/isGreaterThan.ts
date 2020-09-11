
import Assertion from '../types/Assertion';
import Validator from '../types/Validator';
import ExtendedValidator from '../types/ExtendedValidator';

import assert from '../utils/assert';

import isNumber from './isNumber';

/**
* construct a validator to check if a value is greater than a number
* @param {number} bound - the boundary value to check agains
* @returns {function} - a validator function
* @memberof vet.numbers
*/
function isGreaterThan(bound : number) : ExtendedValidator<number> {
	const res : ExtendedValidator = function (val) {
		return isNumber(val) && val > bound;
	} as ExtendedValidator;

	res.assert = assert(res);
	res.schema = 'isNumberGreaterThan(' + bound + ')';

	return res;
}

/**
* @name exclusive
* @param {number} bound - the boundary value to check against
* @returns {function} - a validator function
* @memberof vet.numbers.isGreaterThan
*/
isGreaterThan.exclusive = function exclusive(bound : number) : ExtendedValidator<number> {
	const res : ExtendedValidator = function (val) {
		return isNumber(val) && val > bound;
	} as ExtendedValidator;

	res.assert = assert(res);
	res.schema = 'isNumberGreaterThan.exclusive(' + bound + ')';

	return res;
};

/**
* @name inclusive
* @param {number} bound - the boundary value to check against
* @returns {function} - a validator function
* @memberof vet.numbers.isGreaterThan
*/
isGreaterThan.inclusive = function inclusive(bound : number) : ExtendedValidator<number> {
	const res : ExtendedValidator = function (val) {
		return isNumber(val) && val >= bound;
	} as ExtendedValidator;

	res.assert = assert(res);
	res.schema = 'isNumberGreaterThan.inclusive(' + bound + ')';

	return res;
};

export = isGreaterThan;
