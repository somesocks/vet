
const isString = require('./isString');

const REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/**
* Checks to see if a value is probably a valid email
* @param val - the value to check
* @returns true if val is probably a valid email
* @memberof Vet.String
*/
const isProbablyEmail = (val) => {
	REGEX.lastIndex = 0;
	return isString(val) && REGEX.test(val);
};

module.exports = isProbablyEmail;
