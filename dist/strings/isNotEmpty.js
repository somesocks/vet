"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var assert_1 = __importDefault(require("../utils/assert"));
var isString_1 = __importDefault(require("./isString"));
/**
* Checks to see if a value is a non-empty string
* @param val - the value to check
* @returns true if val is a non-empty string
* @memberof vet.strings
*/
var isNotEmpty = function isNotEmpty(val) { return isString_1.default(val) && val !== ''; };
isNotEmpty.assert = assert_1.default(isNotEmpty);
isNotEmpty.schema = 'isNotEmptyString';
module.exports = isNotEmpty;
