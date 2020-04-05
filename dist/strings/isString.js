"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var assert_1 = __importDefault(require("../utils/assert"));
/**
* Checks to see if a value is a string
* @param val - the value to check
* @returns true if val is a string
* @memberof vet.strings
*/
var isString = function isString(val) {
    return (typeof val === 'string') || (val instanceof String);
};
isString.assert = assert_1.default(isString);
isString.schema = 'isString';
module.exports = isString;
