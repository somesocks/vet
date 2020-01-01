"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var assert_1 = __importDefault(require("../utils/assert"));
var isFunction_1 = __importDefault(require("../functions/isFunction"));
var isObject_1 = __importDefault(require("./isObject"));
function _isShape(schema, object) {
    if (isFunction_1.default(schema)) {
        return schema(object);
    }
    else if (isObject_1.default(schema)) {
        if (!isObject_1.default(object)) {
            return false;
        }
        for (var key in schema) {
            var s = schema[key];
            var o = object[key];
            if (!_isShape(s, o)) {
                return false;
            }
        }
        return true;
    }
    else {
        return object === schema;
    }
}
function _isShapeExact(schema, object) {
    if (isFunction_1.default(schema)) {
        return schema(object);
    }
    else if (isObject_1.default(schema)) {
        if (!isObject_1.default(object)) {
            return false;
        }
        for (var key in schema) {
            var s = schema[key];
            var o = object[key];
            if (!_isShapeExact(s, o)) {
                return false;
            }
        }
        for (var key in object) {
            var s = schema[key];
            var o = object[key];
            if (!_isShapeExact(s, o)) {
                return false;
            }
        }
        return true;
    }
    else {
        return object === schema;
    }
}
/**
* Builds a function to check an object against a schema object
*
* A schema object consists of an object with child object, functions, and values
*
* The schema matching process is as follows:
*
* 1) For each child in the schema object, match it against the corresponding child in the value to be checked
*
* 2) If the schema child is a function, treat it as a validator function
*
* 3) If the schema child is an object, recursively call the schema matching
*
* 4) If the schema child is anything else, check for strict equality
*
* @param schema - the object schema to check
* @returns a validator function that takes in a value val, and returns true if val matches the object schema
* @memberof vet.objects
* @example
* ```javascript
* let isString from 'vet/strings/isString');
* let isNumber from 'vet/numbers/isNumber');
* let isBoolean from 'vet/booleans/isBoolean');
* let isShape from 'vet/objects/isShape');
*
* let isPerson = isShape({
*   name: isString,
*   age: isNumber,
*   alive: isBoolean,
* });
*
* // returns false
* isPerson({});
*
* // returns false, no 'alive' flag
* isPerson({ name: 'John Doe', age: 12 });
*
* // returns true
* isPerson({ name: 'John Doe', age: 12, alive: true });
* ```
*/
function isShape(schema) {
    var res = _isShape.bind(undefined, schema);
    res.assert = assert_1.default(res);
    return res;
}
/**
* Builds a function to check an object against a schema object
*
* This function works similarly to `vet/objects/isShape`,
* but it also checks to make sure every value in the object to check
* has a corresponding validator in the schema
* @param schema - the object schema to check
* @returns a validator function that takes in a value val, and returns true if val matches the object schema exactly
* @memberof vet.objects.isShape
* @example
* ```javascript
* let isString from 'vet/strings/isString');
* let isNumber from 'vet/numbers/isNumber');
* let isBoolean from 'vet/booleans/isBoolean');
* let isShape from 'vet/objects/isShape');
*
* let isPerson = isShape.exact({
*   name: isString,
*   age: isNumber,
*   alive: isBoolean,
* });
*
* // returns false
* isPerson({});
*
* // returns false, no 'alive' flag
* isPerson({ name: 'John Doe', age: 12 });
*
* // returns false, extra property 'gender'
* isPerson({ name: 'John Doe', age: 12, alive: true, gender: 'm' });
*
* // returns true
* isPerson({ name: 'John Doe', age: 12, alive: true });
* ```
*/
isShape.exact = function isShapeExact(schema) {
    var res = _isShapeExact.bind(undefined, schema);
    res.assert = assert_1.default(res);
    return res;
};
module.exports = isShape;
