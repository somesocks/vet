"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("../utils/assert"));
/**
* Checks to see if a value is a function
* @param val - the value to check
* @returns true if the value is a function
* @memberof vet.functions
* @example
* ```javascript
* let isFunction from 'vet/functions/isFunction');
*
* isFunction(null); // returns false
* isFunction({}); // returns false
*
* isFunction(function (){}); // returns true
* ```
*/
var isFunction = function isFunction(val) { return typeof val === 'function'; };
isFunction.assert = (0, assert_1.default)(isFunction);
isFunction.schema = 'isFunction';
exports.default = isFunction;
