
/**
* A function builder to optionally check a value
* @param validator - a validator function
* @returns a function that takes in a value, and returns true if the value does not exist, or the validator returns true
* @memberof vet
*/
const optional = (validator) => (val) => val == null || validator(val);

module.exports = optional;
