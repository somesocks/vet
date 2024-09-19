import assert from '../utils/assert.js';
/**
* Checks to see if a value is an empty string
* @param val - the value to check
* @returns true if val is an empty string
* @memberof vet.strings
*/
const isEmpty = function isEmpty(val) { return val === ''; };
isEmpty.assert = assert(isEmpty);
isEmpty.schema = 'isEmptyString';
export default isEmpty;
