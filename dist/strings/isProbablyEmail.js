"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var assert_1 = __importDefault(require("../utils/assert"));
var isString_1 = __importDefault(require("./isString"));
// eslint-disable-next-line no-useless-escape
var REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/**
* Checks to see if a value is probably a valid email
* @param val - the value to check
* @returns true if val is probably a valid email
* @memberof vet.strings
*/
var isProbablyEmail = function isProbablyEmail(val) {
    REGEX.lastIndex = 0;
    return isString_1.default(val) && REGEX.test(val);
};
isProbablyEmail.assert = assert_1.default(isProbablyEmail);
module.exports = isProbablyEmail;
