
/**
* ```javascript
*
* let isNotUndefined = require('vet/isNotUndefined');
*
* isNotUndefined(undefined); // returns false
*
* isNotUndefined(null); // returns true
* isNotUndefined({}); // returns true
*
* ```
* A function to check for undefined
* @param val - a value to check
* @returns true if val is strictly not undefined
* @memberof vet
*/
function isNotUndefined(val) {
	return val !== undefined;
}

module.exports = isNotUndefined;
