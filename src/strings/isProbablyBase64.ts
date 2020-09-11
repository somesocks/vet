

import Assertion from '../types/Assertion';
import Validator from '../types/Validator';
import ExtendedValidator from '../types/ExtendedValidator';

import assert from '../utils/assert';

import isString from './isString';


const REGEX = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/g;

/**
* Checks to see if a value is probably a valid base64 string
* @param val - the value to check
* @returns true if val is probably a valid base64 string
* @memberof vet.strings
*/
const isProbablyBase64 : ExtendedValidator<string> = function isProbablyBase64(val) {
	REGEX.lastIndex = 0;
	return isString(val) && REGEX.test(val);
} as ExtendedValidator;

isProbablyBase64.assert = assert(isProbablyBase64);
isProbablyBase64.schema = 'isProbablyBase64';

export = isProbablyBase64;
