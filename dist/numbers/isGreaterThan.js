import assert from '../utils/assert.js';
import isNumber from './isNumber.js';
/**
* construct a validator to check if a value is greater than a number
* @param {number} bound - the boundary value to check agains
* @returns {function} - a validator function
* @memberof vet.numbers
*/
function isGreaterThan(bound) {
    const res = function (val) {
        return isNumber(val) && val > bound;
    };
    res.assert = assert(res);
    res.schema = 'isNumberGreaterThan(' + bound + ')';
    return res;
}
/**
* @name exclusive
* @param {number} bound - the boundary value to check against
* @returns {function} - a validator function
* @memberof vet.numbers.isGreaterThan
*/
isGreaterThan.exclusive = function exclusive(bound) {
    const res = function (val) {
        return isNumber(val) && val > bound;
    };
    res.assert = assert(res);
    res.schema = 'isNumberGreaterThan.exclusive(' + bound + ')';
    return res;
};
/**
* @name inclusive
* @param {number} bound - the boundary value to check against
* @returns {function} - a validator function
* @memberof vet.numbers.isGreaterThan
*/
isGreaterThan.inclusive = function inclusive(bound) {
    const res = function (val) {
        return isNumber(val) && val >= bound;
    };
    res.assert = assert(res);
    res.schema = 'isNumberGreaterThan.inclusive(' + bound + ')';
    return res;
};
export default isGreaterThan;
