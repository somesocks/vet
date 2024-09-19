
import Assertion from '../types/Assertion.js';
import Validator from '../types/Validator.js';
import ExtendedValidator from '../types/ExtendedValidator.js';

import assert from '../utils/assert.js';

import isNumber from './isNumber.js';

/**
* Checks to see if a value is zero
* @param val - the value to check
* @returns true if the value is zero
* @memberof vet.numbers
*/
const isZero : ExtendedValidator<number> =
	function isZero(val) { return isNumber(val) && val === 0; } as ExtendedValidator;

isZero.assert = assert(isZero);
isZero.schema = 'isZero';

export default isZero;
