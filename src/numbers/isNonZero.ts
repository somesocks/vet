
import Assertion from '../types/Assertion';
import Validator from '../types/Validator';
import ExtendedValidator from '../types/ExtendedValidator';

import assert from '../utils/assert';

import isNumber from './isNumber';

/**
* Checks to see if a value is a nonzero number
* @param val - the value to check
* @returns true if the value is a nonzero number
* @memberof vet.numbers
*/
const isNonZero : ExtendedValidator<number> = function isNonZero(val) {
	return isNumber(val) && val !== 0;
} as ExtendedValidator;

isNonZero.assert = assert(isNonZero);
isNonZero.schema = 'isNonZero';

export = isNonZero;
