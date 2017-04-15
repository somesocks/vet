
/**
* A function to check for null or undefined
* @param val - a value to check against null and undefined
* @returns true if val is loosely not null (strictly not null or undefined)
* @memberof Vet
*/
const isNotNullOrUndefined = (val) => val != null;

module.exports = isNotNullOrUndefined;
