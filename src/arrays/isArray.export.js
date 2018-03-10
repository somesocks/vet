
/**
* Checks to see if a value is an array
* @name isArray
* @param val - the value to check
* @returns true if the value is an array
* @memberof vet.arrays
*/
module.exports = (val) => Object.prototype.toString.call(val) === '[object Array]';
