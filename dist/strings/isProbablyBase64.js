"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("../utils/assert"));
var isString_1 = __importDefault(require("./isString"));
var REGEX = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/g;
/**
* Checks to see if a value is probably a valid base64 string
* @param val - the value to check
* @returns true if val is probably a valid base64 string
* @memberof vet.strings
*/
var isProbablyBase64 = function isProbablyBase64(val) {
    REGEX.lastIndex = 0;
    return (0, isString_1.default)(val) && REGEX.test(val);
};
isProbablyBase64.assert = (0, assert_1.default)(isProbablyBase64);
isProbablyBase64.schema = 'isProbablyBase64';
exports.default = isProbablyBase64;
