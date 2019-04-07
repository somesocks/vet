
/**
* Checks to see if a value is an object
* @param val - the value to check
* @returns true if the value is an object
* @memberof vet.objects
*/
function isObject(val) { return (val != null) && (Object(val) === val); }

module.exports = isObject;
