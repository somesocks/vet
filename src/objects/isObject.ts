
import Assertion from '../types/Assertion.js';
import Validator from '../types/Validator.js';
import ExtendedValidator from '../types/ExtendedValidator.js';

import assert from '../utils/assert.js';

/**
* Checks to see if a value is an object
* @param val - the value to check
* @returns true if the value is an object
* @memberof vet.objects
*/
const isObject : ExtendedValidator<Record<any, any>> =
	function isObject(val) { return (val != null) && (Object(val) === val); } as ExtendedValidator;

isObject.assert = assert(isObject);
isObject.schema = 'isObject';

export default isObject;
