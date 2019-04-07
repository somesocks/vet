
/**
* ```javascript
*
* let isNoneOf = require('vet/isNoneOf');
*
* let check = isNoneOf(1, 2, 3);
*
* check(1); // returns false
*
* check(4); // returns true
*
* ```
* Constructs a function that checks equality against any number of arguments
* @param {...*} eq - values to check equality against
* @returns a function that takes in a parameter val, and returns true if val is NOT equal to any of the options in ...eq
* @memberof vet
*/
function isNoneOf() {
	var validators = arguments;

	return function (val) {
		for (var i = 0; i < validators.length; i++) {
			var validator = validators[i];
			var check = typeof validator === 'function' ?
				validator(val) :
				(val === validator);

			if (check) { return false; }
		}

		return true;
	}
}

module.exports = isNoneOf;
