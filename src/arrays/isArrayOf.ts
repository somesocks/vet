
import Assertion from '../types/Assertion';
import Validator from '../types/Validator';
import ExtendedValidator from '../types/ExtendedValidator';

import assert from '../utils/assert';

import isArray from './isArray';

/**
* Builds an array validator that checks the children of the array
* @param val - the validator function run against the array children
* @returns a function that returns true if the value is an array, and all of the children pass the validator
* @memberof vet.arrays
* @example
* ```javascript
* let isString from 'vet/strings/isString');
* let isArrayOf from 'vet/arrays/isArrayOf');
*
* let isStringArray = isArrayOf(isString);
*
* isStringArray(null); // returns false
* isStringArray({}); // returns false
* isStringArray([ 1, 2, 3 ]); // returns false
*
* isStringArray([]); // returns true
* isStringArray([ '1', '2', '3' ]); // returns true
* ```
*/
function isArrayOf(validator) : ExtendedValidator<Array<any>> {
	const res : ExtendedValidator<Array<any>> = function(arr) {
		if (!isArray(arr)) { return false; }

		for (let i = 0; i < arr.length; i++) {
			if (!validator(arr[i])) { return false; }
		}

		return true;
	} as ExtendedValidator<Array<any>>;

	res.assert = assert(res);

	return res;
}

export = isArrayOf;