/* eslint no-self-compare: "off" */
/* eslint no-bitwise: "off" */

const isNumber = require('./isNumber.export');

const isFinite = require('./isFinite.export');

const floor = Math.floor;

/**
* Checks to see if a value is an integer
* @param val - the value to check
* @returns true if the value is an integer
* @memberof vet.numbers
*/
const isInteger = (val) => isNumber(val) && isFinite(val) && (floor(val) === val);

module.exports = isInteger;
