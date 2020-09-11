
import Assertion from './types/Assertion';
import Validator from './types/Validator';
import ExtendedValidator from './types/ExtendedValidator';

import assert from './utils/assert';
import schema from './utils/schema';

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
function optional<T>(validator : Validator<T>) : ExtendedValidator<T | null | undefined> {
	const res : ExtendedValidator<T | null | undefined> = function (val) {
		return val == null || validator(val);
	} as ExtendedValidator<T | null | undefined>;

	res.assert = function (val) {
		if (val != null) {
			assert(validator)(val);
		}
	} as Assertion<T | null | undefined>;

	res.schema = 'optional(' + schema(validator) + ')';

	return res;
}

export = optional;
