import assert from '../utils/assert.js';
/**
* Checks to see if a value is loosely false (falsy)
* @param val - the value to check
* @returns true if the value is loosely false
* @memberof vet.booleans
* @example
* ```javascript
* let isFalsy from 'vet/booleans/isFalsy');
*
* isFalse(true); // returns false
*
* isFalsy(null); // returns true
* isFalsy(false); // returns true
* ```
*/
const isFalsy = function isFalsy(val) {
    return !val;
};
isFalsy.assert = assert(isFalsy);
isFalsy.schema = 'isFalsy';
export default isFalsy;
