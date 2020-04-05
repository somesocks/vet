"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var assert_1 = __importDefault(require("../utils/assert"));
var isString_1 = __importDefault(require("./isString"));
/**
* Builds a function that checks to see if a value matches a regular expression
* @param regex - the regular expression to check against
* @returns a function that takes in a value val, and returns true if it is a string that matches regex
* @memberof vet.strings
*/
function matches(regex) {
    var res = function (val) {
        regex.lastIndex = 0;
        return isString_1.default(val) && regex.test(val);
    };
    res.assert = assert_1.default(res);
    res.schema = 'matches(' + regex + ')';
    return res;
}
module.exports = matches;
