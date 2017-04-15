
/**
* Checks to see if a value is a function
* @param val - the value to check
* @returns true if the value is a function
* @memberof Vet.Function
*/
const isFunction = (val) => typeof val === 'function';

module.exports = isFunction;
