
/**
* Checks to see if a value is strictly true
* @param val - the value to check
* @returns true if the value is strictly true
* @memberof vet.booleans
* @example
* ```javascript
* let isTrue = require('vet/booleans/isTrue');
*
* isTrue(null); // returns false
* isTrue(false); // returns false
*
* isTrue(true); // returns true
* ```
*/
function isTrue(val) {
	return val === true;
}

module.exports = isTrue;
