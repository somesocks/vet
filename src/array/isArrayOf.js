
const isArray = Array.isArray ||
	((val) => Object.prototype.toString.call(val) === '[object Array]');

/**
* Builds an array validator that checks the children of the array
* @param val - the validator function run against the array children
* @returns a function that returns true if the value is an array, and all of the children pass the validator
* @memberof Vet.Array
*/
const isArrayOf = (validator) => (val) => {
	if (!isArray(val)) { return false; }
	for (let i of val) {
		if (!validator(i)) { return false; }
	}
	return true;
};

module.exports = isArrayOf;
