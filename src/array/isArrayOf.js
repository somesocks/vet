
const isArray = Array.isArray ||
	((val) => Object.prototype.toString.call(val) === '[object Array]');

const isArrayOf = (validator) => (val) => {
	if (!isArray(val)) { return false; }
	for (let i of val) {
		if (!validator(i)) { return false; }
	}
	return true;
};

module.exports = isArrayOf;
