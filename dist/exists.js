import assert from './utils/assert.js';
/**
* Alias for `vet/isNotNullOrUndefined`
* @param val - value to check
* @returns true if val is not null or undefined
* @memberof vet
* @example
* ```javascript
*
* let exists from 'vet/exists');
*
* exists(null); // returns false
* exists(undefined); // returns false
* exists({}); // returns true
*
* ```
*/
const exists = function exists(val) {
    return val != null;
};
exists.assert = assert(exists);
exists.schema = 'exists';
export default exists;
