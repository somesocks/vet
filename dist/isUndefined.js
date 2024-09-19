import assert from './utils/assert.js';
/**
* A function to check for undefined
* @param val - a value to check
* @returns true if val is strictly undefined
* @memberof vet
* @example
* ```javascript
* let isUndefined from 'vet/isUndefined');
*
* isUndefined({}); // returns false
* isUndefined(null); // returns false
*
* isUndefined(undefined); // returns true
* ```
*/
const isUndefined = function isUndefined(val) {
    return val === undefined;
};
isUndefined.assert = assert(isUndefined);
isUndefined.schema = 'isUndefined';
export default isUndefined;
