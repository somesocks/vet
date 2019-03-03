
const isString = (val) => (typeof val === 'string') || (val instanceof String);

/**
* Checks to see if a value is a non-empty string
* @param val - the value to check
* @returns true if val is a non-empty string
* @memberof vet.strings
*/
const isNotEmpty = (val) => isString(val) && val !== '';

module.exports = isNotEmpty;
