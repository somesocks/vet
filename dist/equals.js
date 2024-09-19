import assert from './utils/assert.js';
import schema from './utils/schema.js';
/**
* Builds an curried equal function
* @param eq - value to check equality against
* @returns a function that takes in one parameter val, and returns true if val === eq
* @memberof vet
* @example
* ```javascript
* let equals from 'vet/equals');
*
* let is3 = equals(3);
*
* is3(null); // returns false
* is3({}); // returns false
*
* is3(3); // returns true
* ```
*/
function equals(eq) {
    const validator = function (val) { return val === eq; };
    validator.assert = assert(validator);
    validator.schema = 'equals(' + schema(eq) + ')';
    return validator;
}
export default equals;
