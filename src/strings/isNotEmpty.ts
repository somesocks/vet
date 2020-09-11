
import Assertion from '../types/Assertion';
import Validator from '../types/Validator';
import ExtendedValidator from '../types/ExtendedValidator';

import assert from '../utils/assert';

import isString from './isString';

/**
* Checks to see if a value is a non-empty string
* @param val - the value to check
* @returns true if val is a non-empty string
* @memberof vet.strings
*/
const isNotEmpty : ExtendedValidator<string> =
	function isNotEmpty(val) { return isString(val) && val !== ''; } as ExtendedValidator;

isNotEmpty.assert = assert(isNotEmpty);
isNotEmpty.schema = 'isNotEmptyString';

export = isNotEmpty;
