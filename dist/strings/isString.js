import assert from '../utils/assert.js';
/**
* Checks to see if a value is a string
* @param val - the value to check
* @returns true if val is a string
* @memberof vet.strings
*/
const isString = function isString(val) {
    return (typeof val === 'string') || (val instanceof String);
};
isString.assert = assert(isString);
isString.schema = 'isString';
export default isString;
