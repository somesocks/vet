
/**
* A function builder to check a value against multiple validator functions
* @param {...function} validators - any number of validator functions
* @returns a function that takes in a value, and returns true if NONE of the validator functions return true
* @memberof vet
*/
const matchesNoneOf = (...validators) => (val) => {
	for (let i = 0; i < validators.length; i++) {
		if (validators[i](val)) { return false; }
	}

	return true;
};

module.exports = matchesNoneOf;
