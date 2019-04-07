
var isNumber = require('./isNumber');

/**
* Checks to see if a value is a negative number
* @param val - the value to check
* @returns true if the value is a negative number
* @memberof vet.numbers
*/
function isNegative(val) {
	return isNumber(val) && val < 0;
}

module.exports = isNegative;
