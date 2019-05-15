
/**
* Checks to see if a value is a function
* @param val - the value to check
* @returns true if the value is a function
* @memberof vet.functions
* @example
* ```javascript
* let isFunction = require('vet/functions/isFunction');
*
* isFunction(null); // returns false
* isFunction({}); // returns false
*
* isFunction(function () {}); // returns true
* ```
*/
declare	function isFunction(val : any): boolean;

export default isFunction;
