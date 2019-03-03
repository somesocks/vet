
const isArray = Array.isArray ||
	((val) => Object.prototype.toString.call(val) === '[object Array]');

/**
* ```javascript
*
* let isString = require('vet/strings/isString');
* let isArrayOf = require('vet/arrays/isArrayOf');
*
* let isStringArray = isArrayOf(isString);
*
* isStringArray(null); // returns false
* isStringArray({}); // returns false
* isStringArray([ 1, 2, 3 ]); // returns false
*
* isStringArray([]); // returns true
* isStringArray([ '1', '2', '3' ]); // returns true
*
* ```
* Builds an array validator that checks the children of the array
* @param val - the validator function run against the array children
* @returns a function that returns true if the value is an array, and all of the children pass the validator
* @memberof vet.arrays
*/
const isArrayOf = (validator) => (arr) => {
	if (!isArray(arr)) { return false; }

	for (let i = 0; i < arr.length; i++) {
		if (!validator(arr[i])) { return false; }
	}

	return true;
};

module.exports = isArrayOf;
