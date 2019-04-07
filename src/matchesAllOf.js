
/**
* ```javascript
*
* let matchesAllOf = require('vet/matchesAllOf');
* let isNumber = require('vet/numbers/isNumber');
*
* let isPositive = matchesAllOf(
*   isNumber,
*   (val) => val > 0
* );
*
* isPositive(null); // returns false
* isPositive(-1); // returns false
*
* isPositive(1); // returns true
*
* ```
* A function builder to check a value against multiple validator functions
* @param {...function} validators - any number of validator functions
* @returns a function that takes in a value, and returns true if ALL of the validator functions return true
* @memberof vet
*/
function matchesAllOf() {
	var validators = arguments;

	return function(val) {
		for (var i = 0; i < validators.length; i++) {
			if (!validators[i](val)) { return false; }
		}

		return true;
	};
}

module.exports = matchesAllOf;
