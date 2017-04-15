
/**
* A function to check for null or undefined
* @param val - a value to check
* @returns true if val is loosely null (strictly null or undefined)
* @memberof Vet
*/
const isNullOrUndefined = (val) => val == null;

module.exports = isNullOrUndefined;
