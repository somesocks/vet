
import Assertion from './types/Assertion.js';
import Validator from './types/Validator.js';
import ExtendedValidator from './types/ExtendedValidator.js';

import assert from './utils/assert.js';

/**
* A function to check for undefined
* @param val - a value to check
* @returns true if val is strictly not undefined
* @memberof vet
* @example
* ```javascript
* let isNotUndefined from 'vet/isNotUndefined');
*
* isNotUndefined(undefined); // returns false
*
* isNotUndefined(null); // returns true
* isNotUndefined({}); // returns true
* ```
*/
const isNotUndefined : ExtendedValidator = function isNotUndefined(val) {
	return val !== undefined;
} as ExtendedValidator;

isNotUndefined.assert = assert(isNotUndefined);
isNotUndefined.schema = 'isNotUndefined';

export default isNotUndefined;
