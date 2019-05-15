
/**
* Checks to see if a value is an array
* @name isArray
* @param val - the value to check
* @returns true if the value is an array
* @memberof vet.arrays
* @example
* ```javascript
* let isArray = require('vet/arrays/isArray');
*
* isArray(null); // returns false
* isArray({}); // returns false
*
* isArray([]); // returns true
* ```
*/
declare function isArray(val : any): boolean;

export default isArray;
