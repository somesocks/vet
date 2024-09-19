
import Assertion from './types/Assertion.js';
import Validator from './types/Validator.js';
import ExtendedValidator from './types/ExtendedValidator.js';
import ValidatorType from './types/ValidatorType.js';

import assert from './utils/assert.js';
import schema from './utils/schema.js';

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
function optional<T extends Function>(validator : T) : ExtendedValidator<ValidatorType<T> | undefined> {

	const res : ExtendedValidator<ValidatorType<T> | undefined> = function (val) {
		return val === undefined || validator(val);
	} as ExtendedValidator<ValidatorType<T> | undefined>;

	res.assert = function (val) {
		if (val !== undefined) {
			assert(validator)(val);
		}
	} as Assertion<T | undefined>;

	res.schema = 'optional(' + schema(validator) + ')';

	return res;
}

export default optional;
