
import Assertion from '../types/Assertion';
import Validator from '../types/Validator';
import ExtendedValidator from '../types/ExtendedValidator';

import assert from '../utils/assert';

/**
* Checks to see if a value is a string
* @param val - the value to check
* @returns true if val is a string
* @memberof vet.strings
*/
const isString : ExtendedValidator<string> = function isString (val) {
	return (typeof val === 'string') || (val instanceof String);
} as ExtendedValidator;

isString.assert = assert(isString);
isString.schema = 'isString';

export = isString;
