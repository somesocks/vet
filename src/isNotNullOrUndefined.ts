
import Assertion from './types/Assertion';
import Validator from './types/Validator';
import ExtendedValidator from './types/ExtendedValidator';

import assert from './utils/assert';

/**
* A function to check for null or undefined
* @param val - a value to check against null and undefined
* @returns true if val is loosely not null (strictly not null or undefined)
* @memberof vet
* @example
* ```javascript
* let isNotNullOrUndefined from 'vet/isNotNullOrUndefined');
*
* isNotNullOrUndefined(null); // returns false
* isNotNullOrUndefined(undefined); // returns false
*
* isNotNullOrUndefined({}); // returns true
* ```
*/
const isNotNullOrUndefined : ExtendedValidator = function isNotNullOrUndefined(val) {
	return val != null;
} as ExtendedValidator;

isNotNullOrUndefined.assert = assert(isNotNullOrUndefined);
isNotNullOrUndefined.schema = 'isNotNullOrUndefined';

export = isNotNullOrUndefined;
