
var isArray =
	Array.isArray ||
	function isArray(val) {
		return Object.prototype.toString.call(val) === '[object Array]';
	};

/**
* Constructor to build an array length validator
* @param len - the length the array shouldbe
* @returns a function that returns true if the value is an array of length len
* @memberof vet.arrays
* @example
* ```javascript
* let isLength = require('vet/arrays/isLength');
*
* let isLength3 = isLength(3);
*
* isLength3(null); // returns false
* isLength3({}); // returns false
* isLength3([ 1, 2 ]); // returns false
*
* isLength3([ '1', '2', '3' ]); // returns true
* ```
*/
function isLength(len) {
	return function (val) {
		return isArray(val) && val.length === len;
	};
}

module.exports = isLength;
