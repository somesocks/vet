import assert from './utils/assert.js';
import schema from './utils/schema.js';
/**
* Constructs a function that checks equality against any number of arguments
* @param {...*} eq - values to check equality against
* @returns a function that takes in a parameter val, and returns true if val is equal to any of the options in ...eq
* @memberof vet
* @example
* ```javascript
* let isOneOf from 'vet/isOneOf');
*
* let check = isOneOf(1, 2, 3);
*
* check(4); // returns false
*
* check(1); // returns true
* ```
*/
function isOneOf(...args) {
    const validators = arguments;
    const res = function (val) {
        for (let i = 0; i < validators.length; i++) {
            const validator = validators[i];
            const check = typeof validator === 'function' ?
                validator(val) :
                (val === validator);
            if (check) {
                return true;
            }
        }
        return false;
    };
    res.assert = assert(res);
    let s = 'isOneOf(';
    for (let i = 0; i < validators.length; i++) {
        s += schema(validators[i]) + ', ';
    }
    s += ')';
    res.schema = s;
    return res;
}
export default isOneOf;
