"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var isObject_1 = __importDefault(require("./isObject"));
var assert_1 = __importDefault(require("../utils/assert"));
// eslint-disable-next-line @typescript-eslint/unbound-method
var propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
/**
* Builds an object validator that checks the properties of the object
* NOTE: This only checks enumerable properties
* @param validator - the validator function run against the array children
* @returns a function that returns true if the value is an object, and all of the object properties pass the validator
* @memberof vet.objects
*/
var isObjectOf = function isObjectOf(validator) {
    var res = function (obj) {
        if (!(0, isObject_1.default)(obj)) {
            return false;
        }
        for (var key in obj) {
            if (propertyIsEnumerable.call(obj, key)) {
                var val = obj[key];
                if (!validator(val, key)) {
                    return false;
                }
            }
        }
        return true;
    };
    res.assert = (0, assert_1.default)(res);
    return res;
};
module.exports = isObjectOf;
