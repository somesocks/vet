import assert from './utils/assert.js';
import schema from './utils/schema.js';
/**
* A function builder to check for a value or null
* @param validator - a validator function
* @returns a function that takes in a value, and returns true if the value is null, or the wrapped validator returns true
* @memberof vet
* @example
* ```javascript
* let nullable from 'vet/nullable');
* let isNumber from 'vet/numbers/isNumber');
*
* let isMaybeNumber = nullable(isNumber);
*
* isMaybeNumber(undefined); // returns false
* isMaybeNumber("1"); // returns false
*
* isMaybeNumber(1); // returns true
* isMaybeNumber(null); // returns true
* ```
*/
function nullable(validator) {
    const res = function (val) {
        return val === null || validator(val);
    };
    res.assert = function (val) {
        if (val !== null) {
            assert(validator)(val);
        }
    };
    res.schema = 'nullable(' + schema(validator) + ')';
    return res;
}
export default nullable;
