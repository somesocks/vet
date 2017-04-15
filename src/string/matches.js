
const isString = require('./isString');

const matches = (regex) => (val) => {
	regex.lastIndex = 0;
	return isString(val) && regex.test(val);
};

module.exports = matches;
