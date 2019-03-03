
/**
* A function builder to check a value against multiple validator functions
* @param {...function} validators - any number of validator functions
* @returns a function that takes in a value, and returns true if ANY of the validator functions return true
* @memberof vet
*/
const matchesOneOf = (...validators) => (val) => {
	for (let i = 0; i < validators.length; i++) {
		if (validators[i](val)) { return true; }
	}

	return false;
};

module.exports = matchesOneOf;
