
import Assertion from './types/Assertion';
import Validator from './types/Validator';
import ExtendedValidator from './types/ExtendedValidator';

import assert from './utils/assert';

/**
* Alias for `vet/isNotNullOrUndefined`
* @param val - value to check
* @returns true if val is not null or undefined
* @memberof vet
* @example
* ```javascript
*
* let exists from 'vet/exists');
*
* exists(null); // returns false
* exists(undefined); // returns false
* exists({}); // returns true
*
* ```
*/
const exists : ExtendedValidator = function exists (val) {
	return val != null;
} as ExtendedValidator;

exists.assert = assert(exists);
exists.schema = 'exists';

export = exists;
