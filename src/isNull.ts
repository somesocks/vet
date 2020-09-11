
import Assertion from './types/Assertion';
import Validator from './types/Validator';
import ExtendedValidator from './types/ExtendedValidator';

import assert from './utils/assert';

/**
* A function to check for null
* @param val - a value to check
* @returns true if val is strictly null
* @memberof vet
* @example
* ```javascript
* let isNull from 'vet/isNull');
*
* isNull(undefined); // returns false
* isNull({}); // returns false
*
* isNull(null); // returns true
* ```
*/
const isNull : ExtendedValidator<null> = function isNull(val) {
	return val === null;
} as ExtendedValidator;

isNull.assert = assert(isNull);
isNull.schema = 'isNull';

export = isNull;
