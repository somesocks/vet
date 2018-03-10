
/**
* Checks to see if a value is an object
* @param val - the value to check
* @returns true if the value is an object
* @memberof vet.objects
*/
const isObject = (val) => (val != null) && (Object(val) === val);

module.exports = isObject;
