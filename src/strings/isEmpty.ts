
import Assertion from '../types/Assertion.js';
import Validator from '../types/Validator.js';
import ExtendedValidator from '../types/ExtendedValidator.js';

import assert from '../utils/assert.js';

/**
* Checks to see if a value is an empty string
* @param val - the value to check
* @returns true if val is an empty string
* @memberof vet.strings
*/
const isEmpty : ExtendedValidator<''> =
	function isEmpty(val) { return val === ''; } as ExtendedValidator;

isEmpty.assert = assert(isEmpty);
isEmpty.schema = 'isEmptyString';

export default isEmpty;
