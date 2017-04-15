
const isString = require('./isString');

/**
* Builds a function to check if a value is a string of length len
* @param len - the desired length of string
* @returns a function that takes in a value val, and returns true if val is a string of length len
* @memberof Vet.String
*/
const isLength = (len) => (val) => isString(val) && val.length === len;

module.exports = isLength;
