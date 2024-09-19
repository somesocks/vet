import assert from '../utils/assert.js';
import isString from './isString.js';
/**
* Builds a function to check if a value is a string of length len
* @param len - the desired length of string
* @returns a function that takes in a value val, and returns true if val is a string of length len
* @memberof vet.strings
*/
function isLength(len) {
    const res = function (val) {
        return isString(val) && val.length === len;
    };
    res.assert = assert(res);
    res.schema = 'isStringOfLength(' + len + ')';
    return res;
}
export default isLength;
