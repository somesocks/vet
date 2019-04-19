/* eslint no-self-compare: "off" */
/* eslint no-bitwise: "off" */

var isNumber = require('./isNumber');

var isFinite = require('./isFinite');

var floor = Math.floor;

/**
* Checks to see if a value is an integer
* @param val - the value to check
* @returns true if the value is an integer
* @memberof vet.numbers
*/
function isInteger(val) {
	return isNumber(val) && isFinite(val) && (floor(val) === val);
}

module.exports = isInteger;