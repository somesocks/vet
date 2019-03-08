
const isNumber = require('./isNumber');

/**
* Checks to see if a value is a negative number
* @param {number} bound - the boundary value to check agains
* @returns {function} - a validator function
* @memberof vet.numbers
*/
const isGreaterThan = (bound) => (val) => isNumber(val) && val > bound;

/**
* @name exclusive
* @param {number} bound - the boundary value to check against
* @returns {function} - a validator function
* @memberof vet.numbers.isGreaterThan
*/
isGreaterThan.exclusive = (bound) => (val) => isNumber(val) && val > bound;

/**
* @name inclusive
* @param {number} bound - the boundary value to check against
* @returns {function} - a validator function
* @memberof vet.numbers.isGreaterThan
*/
isGreaterThan.inclusive = (bound) => (val) => isNumber(val) && val >= bound;

module.exports = isGreaterThan;
