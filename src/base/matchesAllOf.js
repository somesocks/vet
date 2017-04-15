
/**
* A function builder to check a value against multiple validator functions
* @param {...function} validators - any number of validator functions
* @returns a function that takes in a value, and returns true if ALL of the validator functions return true
* @memberof Vet
*/
const matchesAllOf = (...validators) => (val) => {
	for (const v of validators) {
		if (!v(val)) { return false; }
	}
	return true;
};

module.exports = matchesAllOf;
