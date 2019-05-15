
/**
* A function to check for null
* @param val - a value to check
* @returns true if val is strictly null
* @memberof vet
* @example
* ```javascript
* let isNull = require('vet/isNull');
*
* isNull(undefined); // returns false
* isNull({}); // returns false
*
* isNull(null); // returns true
* ```
*/
declare function isNull(val : any): boolean;

export default isNull;
