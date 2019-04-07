
function isString (val) { return (typeof val === 'string') || (val instanceof String); }

// eslint-disable-next-line no-useless-escape
var REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/**
* Checks to see if a value is probably a valid email
* @param val - the value to check
* @returns true if val is probably a valid email
* @memberof vet.strings
*/
function isProbablyEmail(val) {
	REGEX.lastIndex = 0;
	return isString(val) && REGEX.test(val);
}

module.exports = isProbablyEmail;
