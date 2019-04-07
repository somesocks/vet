
function isString (val) { return (typeof val === 'string') || (val instanceof String); }

/**
* Builds a function to check if a value is a string of length len
* @param len - the desired length of string
* @returns a function that takes in a value val, and returns true if val is a string of length len
* @memberof vet.strings
*/
function isLength(len) {
	return function(val) {
		return isString(val) && val.length === len;
	}
}

module.exports = isLength;
