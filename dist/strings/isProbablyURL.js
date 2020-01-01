"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var assert_1 = __importDefault(require("../utils/assert"));
var isString_1 = __importDefault(require("./isString"));
var REGEX = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/g;
/**
* Checks to see if a value is probably a valid URL
* @param val - the value to check
* @returns true if val is probably a valid URL
* @memberof vet.strings
*/
var isProbablyURL = function isProbablyURL(val) {
    REGEX.lastIndex = 0;
    return isString_1.default(val) && REGEX.test(val);
};
isProbablyURL.assert = assert_1.default(isProbablyURL);
module.exports = isProbablyURL;
