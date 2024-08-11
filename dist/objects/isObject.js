"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("../utils/assert"));
/**
* Checks to see if a value is an object
* @param val - the value to check
* @returns true if the value is an object
* @memberof vet.objects
*/
var isObject = function isObject(val) { return (val != null) && (Object(val) === val); };
isObject.assert = (0, assert_1.default)(isObject);
isObject.schema = 'isObject';
exports.default = isObject;
