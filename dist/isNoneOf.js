
/**
* ```javascript
*
* let isNoneOf = require('vet/isNoneOf');
*
* let check = isNoneOf(1, 2, 3);
*
* check(1); // returns false
*
* check(4); // returns true
*
* ```
* Constructs a function that checks equality against any number of arguments
* @param {...*} eq - values to check equality against
* @returns a function that takes in a parameter val, and returns true if val is NOT equal to any of the options in ...eq
* @memberof vet
*/
const isOneOf = (...eq) => (val) => {
	for (let i = 0; i < eq.length; i++) {
		if (val === eq[i]) { return false; }
	}

	return true;
};

module.exports = isOneOf;
