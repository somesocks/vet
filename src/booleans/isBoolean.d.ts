
/**
* Checks to see if a value is a boolean
* @param val - the value to check
* @returns true if the value is a boolean
* @memberof vet.booleans
* @example
* ```javascript
* let isBoolean = require('vet/booleans/isBoolean');
*
* isBoolean(null); // returns false
* isBoolean({}); // returns false
*
* isBoolean(false); // returns true
* ```
*/
declare	function isBoolean(val : any): boolean;

export default isBoolean;
