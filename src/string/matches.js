
const isString = require('./isString');

/**
* Builds a function that checks to see if a value matches a regular expression
* @param regex - the regular expression to check against
* @returns a function that takes in a value val, and returns true if it is a string that matches regex
* @memberof Vet.String
*/
const matches = (regex) => (val) => {
	regex.lastIndex = 0;
	return isString(val) && regex.test(val);
};

module.exports = matches;
