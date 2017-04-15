
/**
* Constructs a function that checks equality against any number of arguments
* @param {...*} eq - values to check equality against
* @returns a function that takes in a parameter val, and returns true if val is equal to any of the options in ...eq
* @memberof Vet
*/
const isOneOf = (...eq) => (val) => {
	for (const e of eq) {
		if (val === e) { return true; }
	}
	return false;
};

module.exports = isOneOf;
