
import Assertion from '../types/Assertion';
import Validator from '../types/Validator';
import ExtendedValidator from '../types/ExtendedValidator';

import assert from '../utils/assert';

/**
* Checks to see if a value is an object
* @param val - the value to check
* @returns true if the value is an object
* @memberof vet.objects
*/
const isObject : ExtendedValidator<object> =
	function isObject(val) { return (val != null) && (Object(val) === val); } as ExtendedValidator<object>;

isObject.assert = assert(isObject);

export = isObject;
