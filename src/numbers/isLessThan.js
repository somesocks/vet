
var isNumber = require('./isNumber');

/**
* construct a validator to check if a value is less than a number
* @param {number} bound - the boundary value to check agains
* @returns {function} - a validator function
* @memberof vet.numbers
*/
function isLessThan(bound) {
	return function(val) {
		return isNumber(val) && val < bound;
	};
}

/**
* @name exclusive
* @param {number} bound - the boundary value to check against
* @returns {function} - a validator function
* @memberof vet.numbers.isLessThan
*/
isLessThan.exclusive = function exclusive(bound) {
	return function(val) {
		return isNumber(val) && val < bound;
	};
};


/**
* @name inclusive
* @param {number} bound - the boundary value to check against
* @returns {function} - a validator function
* @memberof vet.numbers.isLessThan
*/
isLessThan.inclusive = function inclusive(bound) {
	return function(val) {
		return isNumber(val) && val <= bound;
	};
};

module.exports = isLessThan;
