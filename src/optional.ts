
import Assertion from './types/Assertion';
import Validator from './types/Validator';
import ExtendedValidator from './types/ExtendedValidator';

import assert from './utils/assert';

/**
* A function builder to optionally check a value
* @param validator - a validator function
* @returns a function that takes in a value, and returns true if the value does not exist, or the validator returns true
* @memberof vet
* @example
* ```javascript
* let optional from 'vet/optional');
* let isNumber from 'vet/numbers/isNumber');
*
* let isMaybeNumber = optional(isNumber);
*
* isMaybeNumber(null); // returns false
* isMaybeNumber("1"); // returns false
*
* isMaybeNumber(1); // returns true
* isMaybeNumber(undefined); // returns true
* ```
*/
function optional(validator : Validator) : ExtendedValidator {
	const res : ExtendedValidator = function (val) {
		return val == null || validator(val);
	} as ExtendedValidator;

	res.assert = assert(res);

	return res;
}

export = optional;
