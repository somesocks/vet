
import Assertion from '../types/Assertion.js';
import Validator from '../types/Validator.js';
import ExtendedValidator from '../types/ExtendedValidator.js';

import assert from '../utils/assert.js';

/**
* Checks to see if a value is a number
* @param val - the value to check
* @returns true if the value is a number
* @memberof vet.numbers
*/
const isNumber : ExtendedValidator<number> = function isNumber(val) {
	return (typeof (val) === 'number') || (val instanceof Number);
} as ExtendedValidator;

isNumber.assert = assert(isNumber);
isNumber.schema = 'isNumber';

export default isNumber;
