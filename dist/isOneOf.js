
/**
* ```javascript
*
* let isOneOf = require('vet/isOneOf');
*
* let check = isOneOf(1, 2, 3);
*
* check(4); // returns false
*
* check(1); // returns true
*
* ```
* Constructs a function that checks equality against any number of arguments
* @param {...*} eq - values to check equality against
* @returns a function that takes in a parameter val, and returns true if val is equal to any of the options in ...eq
* @memberof vet
*/
const isOneOf = (...eq) => (val) => {
	for (let i = 0; i < eq.length; i++) {
		if (val === eq[i]) { return true; }
	}

	return false;
};

module.exports = isOneOf;
