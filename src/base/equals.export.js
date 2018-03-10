/**
* Builds an curried equal function
* @param eq - value to check equality against
* @returns a function that takes in one parameter val, and returns true if val === eq
* @memberof vet
*/
const equals = (eq) => (val) => val === eq;

module.exports = equals;
