
import Assertion from '../types/Assertion';
import Validator from '../types/Validator';
import ExtendedValidator from '../types/ExtendedValidator';

import assert from '../utils/assert';

/**
* Checks to see if a value is strictly false
* @param val - the value to check
* @returns true if the value is strictly false
* @memberof vet.booleans
* @example
* ```javascript
* let isFalse from 'vet/booleans/isFalse');
*
* isFalse(null); // returns false
* isFalse(true); // returns false
*
* isFalse(false); // returns true
* ```
*/
const isFalse : ExtendedValidator<false> = function isFalse(val) {
	return val === false;
} as ExtendedValidator;

isFalse.assert = assert(isFalse);
isFalse.schema = 'isFalse';

export = isFalse;
