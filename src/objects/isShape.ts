

import Assertion from '../types/Assertion';
import Validator from '../types/Validator';

import ExtendedValidator from '../types/ExtendedValidator';

import assert from '../utils/assert';
import schemaString from '../utils/schema';

import isFunction from '../functions/isFunction';

import isObject from './isObject';

function _isShape(schema, value) {
	if (isFunction(schema)) {
    let a = schema;
		return schema(value);
	} else if (isObject(schema)) {
    let a = schema;
		if (!isObject(value)) { return false; }

		for(const key in schema) {
			const s = schema[key];
			const o = value[key];
			if (!_isShape(s, o)) { return false; }
		}

		return true;
	} else {
		return value === schema;
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
			} catch (e : any) {
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

function _isShapeExact (schema, value) {
	if (isFunction(schema)) {
		return schema(value);
	} else if (isObject(schema)) {
		if (!isObject(value)) { return false; }

		for (const key in schema) {
			const s = schema[key];
			const o = value[key];
			if (!_isShapeExact(s, o)) { return false; }
		}

		for (const key in value) {
			const s = schema[key];
			const o = value[key];
			if (!_isShapeExact(s, o)) { return false; }
		}

		return true;
	} else {
		return value === schema;
	}
}

type _TSchema<T> = (
	T extends Validator ? _TValidator<T> :
		(T extends Function ? _TFunction<T> :
			T extends object ? _TObject<T> : T ));

type _TValidator<T> = (T extends Validator<infer U> ? U : never);

type _TFunction<T> = (T extends Function ? any : never);


type _TPartialKeys<T extends object> = {
	[K in keyof T] -?: (T[K] | undefined) extends T[K] ? K : never
}[keyof T];

type _TRequiredKeys<T extends object> = {
	[K in keyof T] -?: (T[K] | undefined) extends T[K] ? never : K
}[keyof T];

type _TFixProps<T extends object> = {
	[U in keyof ({ [K in _TRequiredKeys<T>] : T[K] } & { [K in _TPartialKeys<T>] ?: T[K] })] : T[U]
};

type _TObjectFromSchema<T extends object> = { [key in keyof T] : _TSchema<T[key]> };

type _TObject<T> = T extends object ? (_TFixProps<_TObjectFromSchema<T>>) : never; 


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
function isShape<V extends object>(schema : V) : ExtendedValidator<_TSchema<V>> {
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
isShape.exact = function isShapeExact<V extends object>(schema : V) : ExtendedValidator<_TSchema<V>> {
	const res = _isShapeExact.bind(undefined, schema) as ExtendedValidator;
	res.assert = assert(res);
	res.schema = 'isShape.exact('+ schemaString(schema) + ')';
	return res;
}








function _isPartialShapeBody(schema, value) {
  if (value == null) {
    return true;
  } if (isFunction(schema)) {
    let a = schema;
		return schema(value);
	} else if (isObject(schema)) {
    let a = schema;
		if (!isObject(value)) { return false; }

		for(const key in schema) {
			const s = schema[key];
			const o = value[key];
			if (!_isPartialShapeBody(s, o)) { return false; }
		}

		return true;
	} else {
		return value === schema;
	}
}

function _isPartialShapeHead(schema, value) { return value != null && _isPartialShapeBody(schema, value); }


type _basic =
	| null
	| undefined
	| string
	| number
	| boolean
	| symbol
	| bigint
  | Date
  | ((...args : any[]) => unknown)
  | any[]
;

type _deepPartial<T> =
  T extends _basic ? T
	: T extends object ? { [KeyType in keyof T] ?: _deepPartial<T[KeyType]> | undefined }
	: unknown;

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
isShape.partial = function isPartialShape<V extends object>(schema : V) : ExtendedValidator<_deepPartial<_TSchema<V>>> {
	const res = _isPartialShapeHead.bind(undefined, schema) as ExtendedValidator;
	res.assert = assert(res);
	res.schema = 'isShape.partial('+ schemaString(schema) + ')';
	return res;
}














export = isShape;
