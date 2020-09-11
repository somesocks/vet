
import Assertion from '../types/Assertion';
import Validator from '../types/Validator';
import ExtendedValidator from '../types/ExtendedValidator';

import assert from '../utils/assert';

import isNumber from './isNumber';

/**
* Checks to see if a value is a negative number
* @param val - the value to check
* @returns true if the value is a negative number
* @memberof vet.numbers
*/
const isNegative : ExtendedValidator<number> = function isNegative(val) {
	return isNumber(val) && val < 0;
} as ExtendedValidator;

isNegative.assert = assert(isNegative);
isNegative.schema = 'isNegative';

export = isNegative;
