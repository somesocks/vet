
import Assertion from '../types/Assertion';
import Validator from '../types/Validator';
import ExtendedValidator from '../types/ExtendedValidator';

import assert from '../utils/assert';

import isNumber from './isNumber';

/**
* Checks to see if a value is a positive number
* @param val - the value to check
* @returns true if the value is a positive number
* @memberof vet.numbers
*/
const isPositive : ExtendedValidator<number> =
	function isPositive(val) { return isNumber(val) && val > 0; } as ExtendedValidator;

isPositive.assert = assert(isPositive);
isPositive.schema = 'isPositive';

export = isPositive;
