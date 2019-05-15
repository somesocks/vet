
/**
* A function to check for undefined
* @param val - a value to check
* @returns true if val is strictly undefined
* @memberof vet
* @example
* ```javascript
* let isUndefined = require('vet/isUndefined');
*
* isUndefined({}); // returns false
* isUndefined(null); // returns false
*
* isUndefined(undefined); // returns true
* ```
*/
declare function isUndefined(val : any): boolean;

export default isUndefined;
