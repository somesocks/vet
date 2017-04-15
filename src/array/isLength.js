
const isArray = Array.isArray ||
	((val) => Object.prototype.toString.call(val) === '[object Array]');

const isLength = (len) => (val) => isArray(val) && val.length === len;

module.exports = isLength;
