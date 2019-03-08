
const isNumber = require('./isNumber');

/**
* Checks to see if a value is a negative number
* @param {number} bound - the boundary value to check agains
* @returns {function} - a validator function
* @memberof vet.numbers
*/
const isLessThan = (bound) => (val) => isNumber(val) && val < bound;

/**
* @name exclusive
* @param {number} bound - the boundary value to check against
* @returns {function} - a validator function
* @memberof vet.numbers.isLessThan
*/
isLessThan.exclusive = (bound) => (val) => isNumber(val) && val < bound;

/**
* @name inclusive
* @param {number} bound - the boundary value to check against
* @returns {function} - a validator function
* @memberof vet.numbers.isLessThan
*/
isLessThan.inclusive = (bound) => (val) => isNumber(val) && val <= bound;

module.exports = isLessThan;
