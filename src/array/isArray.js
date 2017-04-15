
/**
* Checks to see if a value is an array
* @param val - the value to check
* @returns true if the value is an array
* @memberof Vet.Array
*/
const isArray = Array.isArray ||
	((val) => Object.prototype.toString.call(val) === '[object Array]');

module.exports = isArray;
