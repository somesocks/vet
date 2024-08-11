import ExtendedValidator from '../types/ExtendedValidator';
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
declare const isFunction: ExtendedValidator<Function>;
export default isFunction;
