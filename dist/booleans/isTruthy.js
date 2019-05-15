
/**
* Checks to see if a value is loosely true (truthy)
* @param val - the value to check
* @returns true if the value loosely true
* @memberof vet.booleans
* @example
* ```javascript
* let isTruthy = require('vet/booleans/isTruthy');
*
* isTruthy(null); // returns false
* isTruthy(false); // returns false
*
* isTruthy({}); // returns true
* isTruthy(true); // returns true
* ```
*/
function isTruthy(val) {
	return !!val;
}

module.exports = isTruthy;
