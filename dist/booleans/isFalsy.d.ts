
/**
* Checks to see if a value is loosely false (falsy)
* @param val - the value to check
* @returns true if the value is loosely false
* @memberof vet.booleans
* @example
* ```javascript
* let isFalsy = require('vet/booleans/isFalsy');
*
* isFalse(true); // returns false
*
* isFalsy(null); // returns true
* isFalsy(false); // returns true
* ```
*/
declare	function isFalsy(val : any): boolean;

export default isFalsy;
