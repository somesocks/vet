import assert from '../utils/assert.js';
/**
* Checks to see if a value is strictly true
* @param val - the value to check
* @returns true if the value is strictly true
* @memberof vet.booleans
* @example
* ```javascript
* let isTrue from 'vet/booleans/isTrue');
*
* isTrue(null); // returns false
* isTrue(false); // returns false
*
* isTrue(true); // returns true
* ```
*/
const isTrue = function isTrue(val) {
    return val === true;
};
isTrue.assert = assert(isTrue);
isTrue.schema = 'isTrue';
export default isTrue;
