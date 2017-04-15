
const isString = require('./isString');

const REGEX = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/g;

const isProbablyBase64 = (val) => {
	REGEX.lastIndex = 0;
	return isString(val) && REGEX.test(val);
};

module.exports = isProbablyBase64;
