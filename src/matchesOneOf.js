
/**
* ```javascript
*
* let matchesOneOf = require('vet/matchesOneOf');
* let isNumber = require('vet/numbers/isNumber');
* let isString = require('vet/strings/isString');
*
* let isNumberOrString = matchesNoneOf(
*   isNumber,
*   isString,
* );
*
* isNumberOrString(null); // returns false
*
* isNumberOrString(1); // returns true
* isNumberOrString('1'); // returns true
*
* ```
* A function builder to check a value against multiple validator functions
* @param {...function} validators - any number of validator functions
* @returns a function that takes in a value, and returns true if ANY of the validator functions return true
* @memberof vet
*/
function matchesOneOf() {
	var validators = arguments;

	return function (val) {
		for (var i = 0; i < validators.length; i++) {
			if (validators[i](val)) { return true; }
		}

		return false;
	};
}

module.exports = matchesOneOf;
