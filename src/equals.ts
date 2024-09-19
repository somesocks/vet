
import Assertion from './types/Assertion.js';
import Validator from './types/Validator.js';
import ExtendedValidator from './types/ExtendedValidator.js';

import assert from './utils/assert.js';
import schema from './utils/schema.js';

/**
* Builds an curried equal function
* @param eq - value to check equality against
* @returns a function that takes in one parameter val, and returns true if val === eq
* @memberof vet
* @example
* ```javascript
* let equals from 'vet/equals');
*
* let is3 = equals(3);
*
* is3(null); // returns false
* is3({}); // returns false
*
* is3(3); // returns true
* ```
*/
function equals<T>(eq : T) : ExtendedValidator<T> {
	const validator : ExtendedValidator = function (val) { return val === eq; } as ExtendedValidator;
	validator.assert = assert(validator);
	validator.schema = 'equals(' + schema(eq) + ')';
	return validator;
}

export default equals;
