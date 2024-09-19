
import Assertion from '../types/Assertion.js';
import Validator from '../types/Validator.js';
import ExtendedValidator from '../types/ExtendedValidator.js';

import assert from '../utils/assert.js';

/**
* Checks to see if a value is a function
* @param val - the value to check
* @returns true if the value is a function
* @memberof vet.functions
* @example
* ```javascript
* let isFunction from 'vet/functions/isFunction');
*
* isFunction(null); // returns false
* isFunction({}); // returns false
*
* isFunction(function (){}); // returns true
* ```
*/
const isFunction : ExtendedValidator<Function> =
	function isFunction(val) { return typeof val === 'function'; } as ExtendedValidator;

isFunction.assert = assert(isFunction);
isFunction.schema = 'isFunction';

export default isFunction;
