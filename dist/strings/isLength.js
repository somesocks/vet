"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var assert_1 = __importDefault(require("../utils/assert"));
var isString_1 = __importDefault(require("./isString"));
/**
* Builds a function to check if a value is a string of length len
* @param len - the desired length of string
* @returns a function that takes in a value val, and returns true if val is a string of length len
* @memberof vet.strings
*/
function isLength(len) {
    var res = function (val) {
        return (0, isString_1.default)(val) && val.length === len;
    };
    res.assert = (0, assert_1.default)(res);
    res.schema = 'isStringOfLength(' + len + ')';
    return res;
}
module.exports = isLength;
