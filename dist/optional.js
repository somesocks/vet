import assert from './utils/assert.js';
import schema from './utils/schema.js';
/**
* A function builder to optionally check a value
* @param validator - a validator function
* @returns a function that takes in a value, and returns true if the value does not exist, or the validator returns true
* @memberof vet
* @example
* ```javascript
* let optional from 'vet/optional');
* let isNumber from 'vet/numbers/isNumber');
*
* let isMaybeNumber = optional(isNumber);
*
* isMaybeNumber(null); // returns false
* isMaybeNumber("1"); // returns false
*
* isMaybeNumber(1); // returns true
* isMaybeNumber(undefined); // returns true
* ```
*/
function optional(validator) {
    const res = function (val) {
        return val === undefined || validator(val);
    };
    res.assert = function (val) {
        if (val !== undefined) {
            assert(validator)(val);
        }
    };
    res.schema = 'optional(' + schema(validator) + ')';
    return res;
}
export default optional;
