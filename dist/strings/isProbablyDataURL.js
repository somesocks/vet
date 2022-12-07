"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var assert_1 = __importDefault(require("../utils/assert"));
var isString_1 = __importDefault(require("./isString"));
var REGEX = /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*)\s*$/gi;
/**
* Checks to see if a value is probably a valid data URL
* @param val - the value to check
* @returns true if val is probably a valid data URL
* @memberof vet.strings
*/
var isProbablyDataURL = function isProbablyDataURL(val) {
    REGEX.lastIndex = 0;
    return (0, isString_1.default)(val) && REGEX.test(val);
};
isProbablyDataURL.assert = (0, assert_1.default)(isProbablyDataURL);
isProbablyDataURL.schema = 'isProbablyDataURL';
module.exports = isProbablyDataURL;
