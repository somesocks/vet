
/**
* ```javascript
*
* let matchesNoneOf = require('vet/matchesNoneOf');
* let isNumber = require('vet/numbers/isNumber');
* let isString = require('vet/strings/isString');
*
* let isNotNumberOrString = matchesNoneOf(
*   isNumber,
*   isString,
* );
*
* isNotNumberOrString(1); // returns false
* isNotNumberOrString('1'); // returns false
*
* isNotNumberOrString(null); // returns true
*
* ```
* A function builder to check a value against multiple validator functions
* @param {...function} validators - any number of validator functions
* @returns a function that takes in a value, and returns true if NONE of the validator functions return true
* @memberof vet
*/
function matchesNoneOf() {
	var validators = arguments;

	return function(val) {
		for (var i = 0; i < validators.length; i++) {
			if (validators[i](val)) { return false; }
		}

		return true;
	};
}

module.exports = matchesNoneOf;
