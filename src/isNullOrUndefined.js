
/**
* ```javascript
*
* let isNullOrUndefined = require('vet/isNullOrUndefined');
*
* isNullOrUndefined({}); // returns false
*
* isNullOrUndefined(undefined); // returns true
* isNullOrUndefined(null); // returns true
*
* ```
* A function to check for null or undefined
* @param val - a value to check
* @returns true if val is loosely null (strictly null or undefined)
* @memberof vet
*/
function isNullOrUndefined(val) {
	return val == null;
}

module.exports = isNullOrUndefined;