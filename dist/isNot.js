import assert from './utils/assert.js';
import schema from './utils/schema.js';
/**
* a function that inverts the result of a validator
* @param {function} validator - validator to invert
* @returns a wrapper function that inverts the result of a validator
* @memberof vet
* @example
* ```javascript
* let isNot from 'vet/isNot');
* let isNumber from 'vet/numbers/isNumber');
*
* let check = isNot(isNumber);
*
* check(1); // returns false
*
* check(null); // returns true
* ```
*/
function isNot(validator) {
    const res = function (...args) {
        const args2 = arguments;
        return !validator.apply(this, args2);
    };
    res.assert = assert(res);
    res.schema = 'isNot(' + schema(validator) + ')';
    return res;
}
export default isNot;
