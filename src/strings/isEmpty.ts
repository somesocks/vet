
import Assertion from '../types/Assertion';
import Validator from '../types/Validator';
import ExtendedValidator from '../types/ExtendedValidator';

import assert from '../utils/assert';

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

export = isEmpty;
