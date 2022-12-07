"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var assert_1 = __importDefault(require("../utils/assert"));
/**
* Checks to see if a value is an empty string
* @param val - the value to check
* @returns true if val is an empty string
* @memberof vet.strings
*/
var isEmpty = function isEmpty(val) { return val === ''; };
isEmpty.assert = (0, assert_1.default)(isEmpty);
isEmpty.schema = 'isEmptyString';
module.exports = isEmpty;
