
var isNumber = require('./isNumber');

/**
* Checks to see if a value is a positive number
* @param val - the value to check
* @returns true if the value is a positive number
* @memberof vet.numbers
*/
function isPositive(val) { return isNumber(val) && val > 0; }

module.exports = isPositive;
