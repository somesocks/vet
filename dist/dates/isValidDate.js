"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("../utils/assert"));
/**
* Checks to see if a value is a valid Date object
* @param val - the value to check
* @returns true if the value is a valid Date object
* @memberof vet.dates
* @example
* ```javascript
* let isValidDate from 'vet/dates/isValidDate');
*
* isValidDate(null); // returns false
* isValidDate({}); // returns false
* isValidDate(new Date(NaN)); // returns false
*
* isValidDate(new Date()); // returns true
* ```
*/
var isValidDate = function isValidDate(val) {
    return (val instanceof Date) && (!isNaN(val.getTime()));
};
isValidDate.assert = (0, assert_1.default)(isValidDate);
isValidDate.schema = 'isValidDate';
exports.default = isValidDate;
