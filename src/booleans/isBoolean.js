
/**
* Checks to see if a value is a boolean
* @param val - the value to check
* @returns true if the value is a boolean
* @memberof vet.booleans
*/
function isBoolean (val) {
	// return val === true || val === false;
	return (typeof (val) === 'boolean') || (val instanceof Boolean);
}



module.exports = isBoolean;
