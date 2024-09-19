import assert from './utils/assert.js';
/**
* A function to check for null or undefined
* @param val - a value to check
* @returns true if val is loosely null (strictly null or undefined)
* @memberof vet
* @example
* ```javascript
* let isNullOrUndefined from 'vet/isNullOrUndefined');
*
* isNullOrUndefined({}); // returns false
*
* isNullOrUndefined(undefined); // returns true
* isNullOrUndefined(null); // returns true
* ```
*/
const isNullOrUndefined = function isNullOrUndefined(val) {
    return val == null;
};
isNullOrUndefined.assert = assert(isNullOrUndefined);
isNullOrUndefined.schema = 'isNullOrUndefined';
export default isNullOrUndefined;
