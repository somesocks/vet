
/**
* Checks to see if a value is a string
* @param val - the value to check
* @returns true if val is a string
* @memberof Vet.String
*/
const isString = (val) => (typeof val === 'string') || (val instanceof String);

module.exports = isString;
