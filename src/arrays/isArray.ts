
import Assertion from '../types/Assertion';
import Validator from '../types/Validator';
import ExtendedValidator from '../types/ExtendedValidator';

import assert from '../utils/assert';

/**
* Checks to see if a value is an array
* @name isArray
* @param val - the value to check
* @returns true if the value is an array
* @memberof vet.arrays
* @example
* ```javascript
* let isArray from 'vet/arrays/isArray');
*
* isArray(null); // returns false
* isArray({}); // returns false
*
* isArray([]); // returns true
* ```
*/
const isArray : ExtendedValidator<any[]> = Array.isArray ?
	function isArray(val) {
		return Array.isArray(val);
	} as ExtendedValidator :
	function isArray(val) {
		return Object.prototype.toString.call(val) === '[object Array]';
	} as ExtendedValidator;

isArray.schema = 'isArray';
isArray.assert = assert(isArray);

export = isArray;
