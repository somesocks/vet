"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var assert_1 = __importDefault(require("../utils/assert"));
var isNumber_1 = __importDefault(require("./isNumber"));
/**
* construct a validator to check if a value is less than a number
* @param {number} bound - the boundary value to check agains
* @returns {function} - a validator function
* @memberof vet.numbers
*/
function isLessThan(bound) {
    var res = function (val) {
        return isNumber_1.default(val) && val < bound;
    };
    res.assert = assert_1.default(res);
    res.schema = 'isNumberLessThan(' + bound + ')';
    return res;
}
/**
* @name exclusive
* @param {number} bound - the boundary value to check against
* @returns {function} - a validator function
* @memberof vet.numbers.isLessThan
*/
isLessThan.exclusive = function exclusive(bound) {
    var res = function (val) {
        return isNumber_1.default(val) && val < bound;
    };
    res.assert = assert_1.default(res);
    res.schema = 'isNumberLessThan.exclusive(' + bound + ')';
    return res;
};
/**
* @name inclusive
* @param {number} bound - the boundary value to check against
* @returns {function} - a validator function
* @memberof vet.numbers.isLessThan
*/
isLessThan.inclusive = function inclusive(bound) {
    var res = function (val) {
        return isNumber_1.default(val) && val <= bound;
    };
    res.assert = assert_1.default(res);
    res.schema = 'isNumberLessThan.inclusive(' + bound + ')';
    return res;
};
module.exports = isLessThan;
