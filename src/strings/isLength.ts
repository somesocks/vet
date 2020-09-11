

import Assertion from '../types/Assertion';
import Validator from '../types/Validator';
import ExtendedValidator from '../types/ExtendedValidator';

import assert from '../utils/assert';

import isString from './isString';

/**
* Builds a function to check if a value is a string of length len
* @param len - the desired length of string
* @returns a function that takes in a value val, and returns true if val is a string of length len
* @memberof vet.strings
*/
function isLength(len : number) : ExtendedValidator<string> {
	const res = function(val) {
		return isString(val) && val.length === len;
	} as ExtendedValidator;

	res.assert = assert(res);
	res.schema = 'isStringOfLength(' + len + ')';

	return res;
}

export = isLength;
