"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("../utils/assert"));
var schema_1 = __importDefault(require("../utils/schema"));
var isFunction_1 = __importDefault(require("../functions/isFunction"));
var isObject_1 = __importDefault(require("./isObject"));
function _isShape(schema, value) {
    if ((0, isFunction_1.default)(schema)) {
        var a = schema;
        return schema(value);
    }
    else if ((0, isObject_1.default)(schema)) {
        var a = schema;
        if (!(0, isObject_1.default)(value)) {
            return false;
        }
        for (var key in schema) {
            var s = schema[key];
            var o = value[key];
            if (!_isShape(s, o)) {
                return false;
            }
        }
        return true;
    }
    else {
        return value === schema;
    }
}
function _assertIsShape(schema, val) {
    if ((0, isFunction_1.default)(schema)) {
        (0, assert_1.default)(schema(val), function () { return 'property with schema (' + (0, schema_1.default)(val) + ') does not match (' + (0, schema_1.default)(schema) + ')'; });
    }
    else if ((0, isObject_1.default)(schema)) {
        (0, assert_1.default)((0, isObject_1.default)(val), function () { return 'property with schema (' + (0, schema_1.default)(val) + ') does not match (' + (0, schema_1.default)(isObject_1.default) + ')'; });
        for (var key in schema) {
            var s = schema[key];
            var o = val[key];
            try {
                _assertIsShape(s, o);
            }
            catch (e) {
                e.message = '.' + key + ' ' + e.message;
                throw e;
            }
        }
    }
    else {
        (0, assert_1.default)(val === schema, function () { return 'property with schema (' + (0, schema_1.default)(val) + ') does not match (' + (0, schema_1.default)(schema) + ')'; });
    }
}
function _isShapeExact(schema, value) {
    if ((0, isFunction_1.default)(schema)) {
        return schema(value);
    }
    else if ((0, isObject_1.default)(schema)) {
        if (!(0, isObject_1.default)(value)) {
            return false;
        }
        for (var key in schema) {
            var s = schema[key];
            var o = value[key];
            if (!_isShapeExact(s, o)) {
                return false;
            }
        }
        for (var key in value) {
            var s = schema[key];
            var o = value[key];
            if (!_isShapeExact(s, o)) {
                return false;
            }
        }
        return true;
    }
    else {
        return value === schema;
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
    res.assert = _assertIsShape.bind(undefined, schema);
    res.schema = 'isShape(' + (0, schema_1.default)(schema) + ')';
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
    res.assert = (0, assert_1.default)(res);
    res.schema = 'isShape.exact(' + (0, schema_1.default)(schema) + ')';
    return res;
};
function _isPartialShapeBody(schema, value) {
    if (value == null) {
        return true;
    }
    if ((0, isFunction_1.default)(schema)) {
        var a = schema;
        return schema(value);
    }
    else if ((0, isObject_1.default)(schema)) {
        var a = schema;
        if (!(0, isObject_1.default)(value)) {
            return false;
        }
        for (var key in schema) {
            var s = schema[key];
            var o = value[key];
            if (!_isPartialShapeBody(s, o)) {
                return false;
            }
        }
        return true;
    }
    else {
        return value === schema;
    }
}
function _isPartialShapeHead(schema, value) { return value != null && _isPartialShapeBody(schema, value); }
/**
* Builds a function to check an object against a schema object
*
* This function works similarly to `vet/objects/isShape`,
* but it only checks if the value is a "partial match" to the schema, i.e. properties can be undefined
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
* let isPerson = isShape.pattial({
*   name: isString,
*   age: isNumber,
*   contact: {
*     email: isString,
*     phone: isString,
*   },
* });
*
* // returns true
* isPerson({});
*
* // returns true
* isPerson({ name: 'John Doe', age: 12 });
*
* // returns true, empty contact still passes
* isPerson({ name: 'John Doe', age: 12, contact: { } });
*
* // returns true, partial contact still passes
* isPerson({ name: 'John Doe', age: 12, contact: { phone: '00000000' } });
*
* // returns false, age is not a number
* isPerson({ name: 'John Doe', age: '12' });
* ```
*/
isShape.partial = function isPartialShape(schema) {
    var res = _isPartialShapeHead.bind(undefined, schema);
    res.assert = (0, assert_1.default)(res);
    res.schema = 'isShape.partial(' + (0, schema_1.default)(schema) + ')';
    return res;
};
exports.default = isShape;
