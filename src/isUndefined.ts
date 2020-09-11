
import Assertion from './types/Assertion';
import Validator from './types/Validator';
import ExtendedValidator from './types/ExtendedValidator';

import assert from './utils/assert';

/**
* A function to check for undefined
* @param val - a value to check
* @returns true if val is strictly undefined
* @memberof vet
* @example
* ```javascript
* let isUndefined from 'vet/isUndefined');
*
* isUndefined({}); // returns false
* isUndefined(null); // returns false
*
* isUndefined(undefined); // returns true
* ```
*/
const isUndefined : ExtendedValidator<undefined> = function isUndefined(val) {
	return val === undefined;
} as ExtendedValidator;

isUndefined.assert = assert(isUndefined);
isUndefined.schema = 'isUndefined';

export = isUndefined;
