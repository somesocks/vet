
/**
* Checks to see if a value is strictly false
* @param val - the value to check
* @returns true if the value is strictly false
* @memberof vet.booleans
* @example
* ```javascript
* let isFalse = require('vet/booleans/isFalse');
*
* isFalse(null); // returns false
* isFalse(true); // returns false
*
* isFalse(false); // returns true
* ```
*/
declare function isFalse(val : any): boolean;

export default isFalse;
