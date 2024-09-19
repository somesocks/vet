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
const isFunction = function isFunction(val) { return typeof val === 'function'; };
isFunction.assert = assert(isFunction);
isFunction.schema = 'isFunction';
export default isFunction;
