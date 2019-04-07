
/**
* Checks to see if a value is a function
* @param val - the value to check
* @returns true if the value is a function
* @memberof vet.functions
*/
function isFunction(val) { return typeof val === 'function'; }

module.exports = isFunction;
