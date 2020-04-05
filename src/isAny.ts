
import Assertion from './types/Assertion';
import Validator from './types/Validator';
import ExtendedValidator from './types/ExtendedValidator';

import assert from './utils/assert';


/**
* A default validator, that always returns true.
* This can be useful to spec out parameters that you don't wish to validate,
* but need to document for future work.
* @param val - a value to check
* @returns true
* @memberof vet
* @example
* ```javascript
*
* import isAny from 'vet/isAny';
*
* isAny(null); // returns true
* isAny(undefined); // returns true
* isAny({}); // returns true
*
* ```
*/
const isAny : ExtendedValidator = function isAny(val) {
	return true;
} as ExtendedValidator;

isAny.assert = assert(isAny);
isAny.schema = 'isAny';

export = isAny;
