

import Assertion from '../types/Assertion';
import Validator from '../types/Validator';
import ExtendedValidator from '../types/ExtendedValidator';

import assert from '../utils/assert';
import schemaString from '../utils/schema';

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

export = isInstanceOf;
