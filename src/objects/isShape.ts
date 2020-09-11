

import Assertion from '../types/Assertion';
import Validator from '../types/Validator';
import ExtendedValidator from '../types/ExtendedValidator';

import assert from '../utils/assert';
import schemaString from '../utils/schema';

import isFunction from '../functions/isFunction';

import isObject from './isObject';

function _isShape(schema, object) {
	if (isFunction(schema)) {
    let a = schema;
		return schema(object);
	} else if (isObject(schema)) {
    let a = schema;
		if (!isObject(object)) { return false; }

		for(const key in schema) {
			const s = schema[key];
			const o = object[key];
			if (!_isShape(s, o)) { return false; }
		}

		return true;
	} else {
		return object === schema;
	}
}

function _assertIsShape(schema, val) {
	if (isFunction(schema)) {
		assert(
			schema(val),
			() => 'property with schema (' + schemaString(val) + ') does not match (' + schemaString(schema) + ')'
		);
	} else if (isObject(schema)) {
		assert(
			isObject(val),
			() => 'property with schema (' + schemaString(val) + ') does not match (' + schemaString(isObject) + ')'
		);

		for(const key in schema) {
			const s = schema[key];
			const o = val[key];
			try {
				_assertIsShape(s, o);
			} catch (e) {
				e.message = '.' + key + ' ' + e.message;
				throw e;
			}
		}

	} else {
		assert(
			val === schema,
			() => 'property with schema (' + schemaString(val) + ') does not match (' + schemaString(schema) + ')'
		);
	}
}

function _isShapeExact (schema, object) {
	if (isFunction(schema)) {
		return schema(object);
	} else if (isObject(schema)) {
		if (!isObject(object)) { return false; }

		for (const key in schema) {
			const s = schema[key];
			const o = object[key];
			if (!_isShapeExact(s, o)) { return false; }
		}

		for (const key in object) {
			const s = schema[key];
			const o = object[key];
			if (!_isShapeExact(s, o)) { return false; }
		}

		return true;
	} else {
		return object === schema;
	}
}


type _schemaExtractor<T> = T extends Validator<infer U> ? U :
  (T extends Function ? any :
    ( T extends object ? SchemaValidator<T> : T)
  );

type SchemaValidator<T extends object> = {
  [key in keyof T] : _schemaExtractor<T[key]>
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
function isShape<V extends object>(schema : V) : ExtendedValidator<SchemaValidator<V>> {
	const res = _isShape.bind(undefined, schema) as ExtendedValidator;
	res.assert = _assertIsShape.bind(undefined, schema);
	res.schema = 'isShape('+ schemaString(schema) + ')';
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
isShape.exact = function isShapeExact(schema) : ExtendedValidator<SchemaValidator<typeof schema>> {
	const res = _isShapeExact.bind(undefined, schema) as ExtendedValidator;
	res.assert = assert(res);
	res.schema = 'isShape.exact('+ schemaString(schema) + ')';
	return res;
}

export = isShape;
