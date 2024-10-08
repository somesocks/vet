import assert from './utils/assert.js';
/**
* A function to check for undefined
* @param val - a value to check
* @returns true if val is strictly not undefined
* @memberof vet
* @example
* ```javascript
* let isNotUndefined from 'vet/isNotUndefined');
*
* isNotUndefined(undefined); // returns false
*
* isNotUndefined(null); // returns true
* isNotUndefined({}); // returns true
* ```
*/
const isNotUndefined = function isNotUndefined(val) {
    return val !== undefined;
};
isNotUndefined.assert = assert(isNotUndefined);
isNotUndefined.schema = 'isNotUndefined';
export default isNotUndefined;
