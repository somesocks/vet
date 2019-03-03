
const isArray = Array.isArray ||
	((val) => Object.prototype.toString.call(val) === '[object Array]');

/**
* ```javascript
*
* let isLength = require('vet/arrays/isLength');
*
* let isLength3 = isLength(3);
*
* isLength3(null); // returns false
* isLength3({}); // returns false
* isLength3([ 1, 2 ]); // returns false
*
* isLength3([ '1', '2', '3' ]); // returns true
*
* ```
* Builds an array length checker
* @param len - the length the array shouldbe
* @returns a function that returns true if the value is an array of length len
* @memberof vet.arrays
*/
const isLength = (len) => (val) => isArray(val) && val.length === len;

module.exports = isLength;
