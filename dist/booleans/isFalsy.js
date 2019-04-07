
/**
* Checks to see if a value is loosely false (falsy)
* @param val - the value to check
* @returns true if the value is loosely false
* @memberof vet.booleans
*/
function isFalsy(val) {
	return !val;
}

module.exports = isFalsy;
