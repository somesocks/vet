
function isFunction(val) { return typeof val === 'function'; }

/**
* ```javascript
*
* let isAllOf = require('vet/isAllOf');
* let isNumber = require('vet/numbers/isNumber');
* let isPositive = require('vet/numbers/isPositive');
*
* let check = isAllOf(isNumber, isPositive);
*
* check(-1); // returns false
*
* check(1); // returns true
*
* ```
* Constructs a function that checks equality against any number of arguments
* @param {...*} eq - values to check equality against
* @returns a function that takes in a parameter val, and returns true if val is equal to any of the options in ...eq
* @memberof vet
*/
function isAllOf () {
	var validators = arguments;

	return function (val) {
		for (var i = 0; i < validators.length; i++) {
			var validator = validators[i];
			var check = typeof validator === 'function' ?
				validator(val) :
				(val === validator);

			if (!check) { return false; }
		}

		return true;
	}
}

module.exports = isAllOf;
