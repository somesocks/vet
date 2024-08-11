"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("../utils/assert"));
var isNumber_1 = __importDefault(require("./isNumber"));
/**
* construct a validator to check if a value is between two numbers
* @param {number} lower - the lower boundary value to check against
* @param {number} upper - the upper boundary value to check against
* @returns {function} - a validator function
* @memberof vet.numbers
*/
function isBetween(lower, upper) {
    var res = function (val) {
        return (0, isNumber_1.default)(val) && val > lower && val < upper;
    };
    res.assert = (0, assert_1.default)(res);
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
    var res = function (val) {
        return (0, isNumber_1.default)(val) && val > lower && val < upper;
    };
    res.assert = (0, assert_1.default)(res);
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
    var res = function (val) {
        return (0, isNumber_1.default)(val) && val >= lower && val <= upper;
    };
    res.assert = (0, assert_1.default)(res);
    res.schema = 'isNumberBetween.inclusive(' + lower + ',' + upper + ')';
    return res;
};
exports.default = isBetween;
