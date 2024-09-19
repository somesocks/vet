
import Assertion from '../types/Assertion.js';
import Validator from '../types/Validator.js';
import ExtendedValidator from '../types/ExtendedValidator.js';

import assert from '../utils/assert.js';

/**
* Checks to see if a value is strictly true
* @param val - the value to check
* @returns true if the value is strictly true
* @memberof vet.booleans
* @example
* ```javascript
* let isTrue from 'vet/booleans/isTrue');
*
* isTrue(null); // returns false
* isTrue(false); // returns false
*
* isTrue(true); // returns true
* ```
*/
const isTrue : ExtendedValidator<true> = function isTrue(val) {
	return val === true;
} as ExtendedValidator;

isTrue.assert = assert(isTrue);
isTrue.schema = 'isTrue';

export default isTrue;
