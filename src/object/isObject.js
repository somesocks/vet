
/**
* Checks to see if a value is an object
* @param val - the value to check
* @returns true if the value is an object
* @memberof Vet.Object
*/
const isObject = (val) =>
	val !== null
	&& (typeof val === 'function' || typeof val === 'object');

module.exports = isObject;
