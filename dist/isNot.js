
/**
* a function that inverts the result of a validator
* @param {function} validator - validator to invert
* @returns a wrapper function that inverts the result of a validator
* @memberof vet
* @example
* ```javascript
* let isNot = require('vet/isNot');
* let isNumber = require('vet/numbers/isNumber');
*
* let check = isNot(isNumber);
*
* check(1); // returns false
*
* check(null); // returns true
* ```
*/
function isNot(validator) {

	return function (val) {
		return !validator(val);
	}
}

module.exports = isNot;
