
import Assertion from '../types/Assertion';
import Validator from '../types/Validator';
import ExtendedValidator from '../types/ExtendedValidator';
import ValidatorType from '../types/ValidatorType';

import assert from '../utils/assert';
import schema from '../utils/schema';

import isArray from './isArray';

// type IsArrayOfType<T> = ;
type IsArrayOfValidator<T> = ExtendedValidator<ValidatorType<T>[]>;

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
function isArrayOf<T extends Function>(validator : T) : IsArrayOfValidator<T> {
	const res : ExtendedValidator = function(arr) {
		if (!isArray(arr)) { return false; }

		for (let i = 0; i < arr.length; i++) {
			if (!validator(arr[i])) { return false; }
		}

		return true;
	} as ExtendedValidator;

	res.assert = assert(res);
	res.schema = 'isArrayOf(' + schema(validator) + ')';

	return res;
}

export = isArrayOf;
