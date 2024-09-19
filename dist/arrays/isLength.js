import assert from '../utils/assert.js';
import isArray from './isArray.js';
/**
* Constructor to build an array length validator
* @param len - the length the array shouldbe
* @returns a function that returns true if the value is an array of length len
* @memberof vet.arrays
* @example
* ```javascript
* let isLength from 'vet/arrays/isLength');
*
* let isLength3 = isLength(3);
*
* isLength3(null); // returns false
* isLength3({}); // returns false
* isLength3([ 1, 2 ]); // returns false
*
* isLength3([ '1', '2', '3' ]); // returns true
* ```
*/
function isLength(len) {
    const res = function (val) {
        return isArray(val) && val.length === len;
    };
    res.assert = assert(res);
    res.schema = 'isArrayOfLength(' + len + ')';
    return res;
}
export default isLength;
