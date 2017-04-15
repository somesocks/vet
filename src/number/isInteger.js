
const isNumber = require('./isNumber');

const isInteger = Number.isInteger ||
	((val) => isNumber(val) && isFinite(val) && (Math.floor(val) === val));

module.exports = isInteger;
