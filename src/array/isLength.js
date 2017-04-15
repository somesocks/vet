
const isArray = Array.isArray ||
	((val) => Object.prototype.toString.call(val) === '[object Array]');

/**
* Builds an array length checker
* @param len - the length the array shouldbe
* @returns a function that returns true if the value is an array of length len
* @memberof Vet.Array
*/
const isLength = (len) => (val) => isArray(val) && val.length === len;

module.exports = isLength;
