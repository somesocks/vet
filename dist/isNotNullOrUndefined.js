
/**
* ```javascript
*
* let isNotNullOrUndefined = require('vet/isNotNullOrUndefined');
*
* isNotNullOrUndefined(null); // returns false
* isNotNullOrUndefined(undefined); // returns false
*
* isNotNullOrUndefined({}); // returns true
*
* ```
* A function to check for null or undefined
* @param val - a value to check against null and undefined
* @returns true if val is loosely not null (strictly not null or undefined)
* @memberof vet
*/
function isNotNullOrUndefined(val) {
	return val != null;
}

module.exports = isNotNullOrUndefined;
