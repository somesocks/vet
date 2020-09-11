

import Assertion from '../types/Assertion';
import Validator from '../types/Validator';
import ExtendedValidator from '../types/ExtendedValidator';

import assert from '../utils/assert';

import isString from './isString';

const REGEX = /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*)\s*$/gi;

/**
* Checks to see if a value is probably a valid data URL
* @param val - the value to check
* @returns true if val is probably a valid data URL
* @memberof vet.strings
*/
const isProbablyDataURL : ExtendedValidator<string> = function isProbablyDataURL(val) {
	REGEX.lastIndex = 0;
	return isString(val) && REGEX.test(val);
} as ExtendedValidator;

isProbablyDataURL.assert = assert(isProbablyDataURL);
isProbablyDataURL.schema = 'isProbablyDataURL';

export = isProbablyDataURL;
