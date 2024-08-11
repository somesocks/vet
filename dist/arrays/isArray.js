"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("../utils/assert"));
/**
* Checks to see if a value is an array
* @name isArray
* @param val - the value to check
* @returns true if the value is an array
* @memberof vet.arrays
* @example
* ```javascript
* let isArray from 'vet/arrays/isArray');
*
* isArray(null); // returns false
* isArray({}); // returns false
*
* isArray([]); // returns true
* ```
*/
var isArray = Array.isArray ?
    function isArray(val) {
        return Array.isArray(val);
    } :
    function isArray(val) {
        return Object.prototype.toString.call(val) === '[object Array]';
    };
isArray.schema = 'isArray';
isArray.assert = (0, assert_1.default)(isArray);
exports.default = isArray;
