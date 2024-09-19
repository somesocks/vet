import assert from '../utils/assert.js';
/**
* Checks to see if a value is an array
* @name isArray
* @param val - the value to check
* @returns true if the value is an array
* @memberof vet.arrays
* @example
* ```javascript
* let isArray from 'vet/arrays/isArray');
*
* isArray(null); // returns false
* isArray({}); // returns false
*
* isArray([]); // returns true
* ```
*/
const isArray = Array.isArray ?
    function isArray(val) {
        return Array.isArray(val);
    } :
    function isArray(val) {
        return Object.prototype.toString.call(val) === '[object Array]';
    };
isArray.schema = 'isArray';
isArray.assert = assert(isArray);
export default isArray;
