
import Assertion from './types/Assertion';
import Validator from './types/Validator';
import ExtendedValidator from './types/ExtendedValidator';

import assert from './utils/assert';


/**
* A function to check for nulls
* @param val - a value to check against null
* @returns true if val is strictly not equal to null
* @memberof vet
* @example
* ```javascript
*
* let isNotNull from 'vet/isNotNull');
*
* isNotNull(null); // returns false
*
* isNotNull(undefined); // returns true
* isNotNull({}); // returns true
*
* ```
*/
const isNotNull : ExtendedValidator = function isNotNull(val) {
	return val !== null;
} as ExtendedValidator;

isNotNull.assert = assert(isNotNull);
isNotNull.schema = 'isNotNull';

export = isNotNull;
