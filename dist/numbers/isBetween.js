import assert from '../utils/assert.js';
import isNumber from './isNumber.js';
/**
* construct a validator to check if a value is between two numbers
* @param {number} lower - the lower boundary value to check against
* @param {number} upper - the upper boundary value to check against
* @returns {function} - a validator function
* @memberof vet.numbers
*/
function isBetween(lower, upper) {
    const res = function (val) {
        return isNumber(val) && val > lower && val < upper;
    };
    res.assert = assert(res);
    res.schema = 'isNumberBetween(' + lower + ',' + upper + ')';
    return res;
}
/**
* @name exclusive
* @param {number} lower - the lower boundary value to check against
* @param {number} upper - the upper boundary value to check against
* @returns {function} - a validator function
* @memberof vet.numbers.isBetween
*/
isBetween.exclusive = function exclusive(lower, upper) {
    const res = function (val) {
        return isNumber(val) && val > lower && val < upper;
    };
    res.assert = assert(res);
    res.schema = 'isNumberBetween.exclusive(' + lower + ',' + upper + ')';
    return res;
};
/**
* @name inclusive
* @param {number} lower - the lower boundary value to check against
* @param {number} upper - the upper boundary value to check against
* @returns {function} - a validator function
* @memberof vet.numbers.isBetween
*/
isBetween.inclusive = function inclusive(lower, upper) {
    const res = function (val) {
        return isNumber(val) && val >= lower && val <= upper;
    };
    res.assert = assert(res);
    res.schema = 'isNumberBetween.inclusive(' + lower + ',' + upper + ')';
    return res;
};
export default isBetween;
