import assert from '../utils/assert.js';
import isString from './isString.js';
/**
* Checks to see if a value is a non-empty string
* @param val - the value to check
* @returns true if val is a non-empty string
* @memberof vet.strings
*/
const isNotEmpty = function isNotEmpty(val) { return isString(val) && val !== ''; };
isNotEmpty.assert = assert(isNotEmpty);
isNotEmpty.schema = 'isNotEmptyString';
export default isNotEmpty;
