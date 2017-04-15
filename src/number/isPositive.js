
const isNumber = require('./isNumber');

/**
* Checks to see if a value is a positive number
* @param val - the value to check
* @returns true if the value is a positive number
* @memberof Vet.Number
*/
const isPositive = (val) => isNumber(val) && val > 0;

module.exports = isPositive;
