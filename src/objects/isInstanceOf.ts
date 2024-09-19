

import Assertion from '../types/Assertion.js';
import Validator from '../types/Validator.js';
import ExtendedValidator from '../types/ExtendedValidator.js';

import assert from '../utils/assert.js';
import schemaString from '../utils/schema.js';

/**
* Checks to see if a value is an object and inherits a prototype from a constructor function
* @param con - the constructor function to check against
* @returns a validator to check if a value inherits that prototype
* @memberof vet.objects
*/
function isInstanceOf<T extends Function>(con : T) {

	const validator = function _instanceOfValidator(val) {
			return (
				(val != null)
				&& (Object(val) === val)
				&& (val instanceof (con as any))
			);
		} as ExtendedValidator<T['prototype']>;

	validator.assert = assert(validator);
	validator.schema = 'isInstanceOf('+ schemaString(con) +')'

	return validator;
}

export default isInstanceOf;
