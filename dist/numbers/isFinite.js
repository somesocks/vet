"use strict";
/* eslint no-self-compare: "off" */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var assert_1 = __importDefault(require("../utils/assert"));
/**
* Checks to see if a value is a finite number
* @param val - the value to check
* @returns true if the value is a finite number
* @memberof vet.numbers
*/
var isFinite = function isFinite(value) {
    // 1. If Type(number) is not Number, return false.
    if (typeof value !== 'number') {
        return false;
    }
    // 2. If number is NaN, +∞, or −∞, return false.
    if (value !== value || value === Infinity || value === -Infinity) {
        return false;
    }
    // 3. Otherwise, return true.
    return true;
};
isFinite.assert = assert_1.default(isFinite);
isFinite.schema = 'isFinite';
module.exports = isFinite;
