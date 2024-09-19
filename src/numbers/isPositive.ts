
import Assertion from '../types/Assertion.js';
import Validator from '../types/Validator.js';
import ExtendedValidator from '../types/ExtendedValidator.js';

import assert from '../utils/assert.js';

import isNumber from './isNumber.js';

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

export default isPositive;
