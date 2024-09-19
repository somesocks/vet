
import Assertion from '../types/Assertion.js';
import Validator from '../types/Validator.js';
import ExtendedValidator from '../types/ExtendedValidator.js';

import assert from '../utils/assert.js';

import isNumber from './isNumber.js';

/**
* construct a validator to check if a value is less than a number
* @param {number} bound - the boundary value to check agains
* @returns {function} - a validator function
* @memberof vet.numbers
*/
function isLessThan(bound : number) : ExtendedValidator<number> {
	const res = function(val) {
		return isNumber(val) && val < bound;
	} as ExtendedValidator;

	res.assert = assert(res);
	res.schema = 'isNumberLessThan(' + bound + ')';

	return res;
}

/**
* @name exclusive
* @param {number} bound - the boundary value to check against
* @returns {function} - a validator function
* @memberof vet.numbers.isLessThan
*/
isLessThan.exclusive = function exclusive(bound : number) : ExtendedValidator<number> {
	const res = function(val) {
		return isNumber(val) && val < bound;
	} as ExtendedValidator;

	res.assert = assert(res);
	res.schema = 'isNumberLessThan.exclusive(' + bound + ')';

	return res;
};


/**
* @name inclusive
* @param {number} bound - the boundary value to check against
* @returns {function} - a validator function
* @memberof vet.numbers.isLessThan
*/
isLessThan.inclusive = function inclusive(bound : number) : ExtendedValidator<number> {
	const res = function(val) {
		return isNumber(val) && val <= bound;
	} as ExtendedValidator;

	res.assert = assert(res);
	res.schema = 'isNumberLessThan.inclusive(' + bound + ')';

	return res;
};

export default isLessThan;
