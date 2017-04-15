
const isNumber = require('./isNumber');

/**
* Checks to see if a value is an integer
* @param val - the value to check
* @returns true if the value is an integer
* @memberof Vet.Number
*/
const isInteger = Number.isInteger ||
	((val) => isNumber(val) && isFinite(val) && (Math.floor(val) === val));

module.exports = isInteger;
