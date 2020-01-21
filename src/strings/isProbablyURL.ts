
import Assertion from '../types/Assertion';
import Validator from '../types/Validator';
import ExtendedValidator from '../types/ExtendedValidator';

import assert from '../utils/assert';

import isString from './isString';


const REGEX = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/g;

/**
* Checks to see if a value is probably a valid URL
* @param val - the value to check
* @returns true if val is probably a valid URL
* @memberof vet.strings
*/
const isProbablyURL : ExtendedValidator<string> = function isProbablyURL(val) {
	REGEX.lastIndex = 0;
	return isString(val) && REGEX.test(val);
} as ExtendedValidator<string>;

isProbablyURL.assert = assert(isProbablyURL);

export = isProbablyURL;
