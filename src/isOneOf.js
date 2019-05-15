
function isFunction(val) { return typeof val === 'function'; }

/**
* Constructs a function that checks equality against any number of arguments
* @param {...*} eq - values to check equality against
* @returns a function that takes in a parameter val, and returns true if val is equal to any of the options in ...eq
* @memberof vet
* @example
* ```javascript
* let isOneOf = require('vet/isOneOf');
*
* let check = isOneOf(1, 2, 3);
*
* check(4); // returns false
*
* check(1); // returns true
* ```
*/
function isOneOf () {
	var validators = arguments;

	return function (val) {
		for (var i = 0; i < validators.length; i++) {
			var validator = validators[i];
			var check = typeof validator === 'function' ?
				validator(val) :
				(val === validator);

			if (check) { return true; }
		}

		return false;
	}
}

module.exports = isOneOf;
