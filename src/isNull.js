
/**
* ```javascript
*
* let isNull = require('vet/isNull');
*
* isNull(undefined); // returns false
* isNull({}); // returns false
*
* isNull(null); // returns true
*
* ```
* A function to check for null
* @param val - a value to check
* @returns true if val is strictly null
* @memberof vet
*/
function isNull(val) {
	return val === null;
}

module.exports = isNull;