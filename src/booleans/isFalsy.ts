
import Assertion from '../types/Assertion';
import Validator from '../types/Validator';
import ExtendedValidator from '../types/ExtendedValidator';

import assert from '../utils/assert';

/**
* Checks to see if a value is loosely false (falsy)
* @param val - the value to check
* @returns true if the value is loosely false
* @memberof vet.booleans
* @example
* ```javascript
* let isFalsy from 'vet/booleans/isFalsy');
*
* isFalse(true); // returns false
*
* isFalsy(null); // returns true
* isFalsy(false); // returns true
* ```
*/
const isFalsy : ExtendedValidator = function isFalsy(val) {
	return !val;
} as ExtendedValidator;

isFalsy.assert = assert(isFalsy);
isFalsy.schema = 'isFalsy';

export = isFalsy;
