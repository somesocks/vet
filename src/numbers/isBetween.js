
var isNumber = require('./isNumber');

/**
* Checks to see if a value is a negative number
* @param {number} lower - the lower boundary value to check against
* @param {number} upper - the upper boundary value to check against
* @returns {function} - a validator function
* @memberof vet.numbers
*/
function isBetween(lower, upper) {
	return function (val) {
		return isNumber(val) && val > lower && val < upper;
	}
}

/**
* @name exclusive
* @param {number} lower - the lower boundary value to check against
* @param {number} upper - the upper boundary value to check against
* @returns {function} - a validator function
* @memberof vet.numbers.isBetween
*/
isBetween.exclusive = function exclusive(lower, upper) {
	return function (val) {
		return isNumber(val) && val > lower && val < upper;
	}
};


/**
* @name inclusive
* @param {number} lower - the lower boundary value to check against
* @param {number} upper - the upper boundary value to check against
* @returns {function} - a validator function
* @memberof vet.numbers.isBetween
*/
isBetween.inclusive = function inclusive(lower, upper) {
	return function (val) {
		return isNumber(val) && val >= lower && val <= upper;
	}
};

module.exports = isBetween;