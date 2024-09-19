import assert from '../utils/assert.js';
/**
* Checks to see if a value is an object
* @param val - the value to check
* @returns true if the value is an object
* @memberof vet.objects
*/
const isObject = function isObject(val) { return (val != null) && (Object(val) === val); };
isObject.assert = assert(isObject);
isObject.schema = 'isObject';
export default isObject;
