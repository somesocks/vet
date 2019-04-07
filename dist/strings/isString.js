
/**
* Checks to see if a value is a string
* @param val - the value to check
* @returns true if val is a string
* @memberof vet.strings
*/
function isString (val) { return (typeof val === 'string') || (val instanceof String); }

module.exports = isString;
