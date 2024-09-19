
import Assertion from '../types/Assertion.js';
import Validator from '../types/Validator.js';
import ExtendedValidator from '../types/ExtendedValidator.js';

import assert from '../utils/assert.js';

/**
* Checks to see if a value is a boolean
* @param val - the value to check
* @returns true if the value is a boolean
* @memberof vet.booleans
*/
const isBoolean : ExtendedValidator<boolean> = function isBoolean (val) {
	// return val === true || val === false;
	return (typeof (val) === 'boolean') || (val instanceof Boolean);
} as ExtendedValidator;

isBoolean.assert = assert(isBoolean);
isBoolean.schema = 'isBoolean';

export default isBoolean;
