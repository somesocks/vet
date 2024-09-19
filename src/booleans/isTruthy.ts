
import Assertion from '../types/Assertion.js';
import Validator from '../types/Validator.js';
import ExtendedValidator from '../types/ExtendedValidator.js';

import assert from '../utils/assert.js';

/**
* Checks to see if a value is loosely true (truthy)
* @param val - the value to check
* @returns true if the value loosely true
* @memberof vet.booleans
* @example
* ```javascript
* let isTruthy from 'vet/booleans/isTruthy');
*
* isTruthy(null); // returns false
* isTruthy(false); // returns false
*
* isTruthy({}); // returns true
* isTruthy(true); // returns true
* ```
*/
const isTruthy : ExtendedValidator = function isTruthy(val) {
	return !!val;
} as ExtendedValidator;

isTruthy.assert = assert(isTruthy);
isTruthy.schema = 'isTruthy';

export default isTruthy;
