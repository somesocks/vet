
import Assertion from '../types/Assertion.js';
import Validator from '../types/Validator.js';
import ExtendedValidator from '../types/ExtendedValidator.js';

import assert from '../utils/assert.js';

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

export default isFalse;
