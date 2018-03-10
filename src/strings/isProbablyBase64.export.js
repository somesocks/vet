
const isString = (val) => (typeof val === 'string') || (val instanceof String);

const REGEX = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/g;

/**
* Checks to see if a value is probably a valid base64 string
* @param val - the value to check
* @returns true if val is probably a valid base64 string
* @memberof vet.strings
*/
const isProbablyBase64 = (val) => {
	REGEX.lastIndex = 0;
	return isString(val) && REGEX.test(val);
};

module.exports = isProbablyBase64;
