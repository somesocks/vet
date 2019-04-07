/** @namespace vet */

var Vet = {
		equals: require('./equals'),
		exists: require('./exists'),
		isNoneOf: require('./isNoneOf'),
		isNotNull: require('./isNotNull'),
		isNotNullOrUndefined: require('./isNotNullOrUndefined'),
		isNotUndefined: require('./isNotUndefined'),
		isNull: require('./isNull'),
		isNullOrUndefined: require('./isNullOrUndefined'),
		isOneOf: require('./isOneOf'),
		isUndefined: require('./isUndefined'),
		matchesAllOf: require('./matchesAllOf'),
		matchesNoneOf: require('./matchesNoneOf'),
		matchesOneOf: require('./matchesOneOf'),
		optional: require('./optional'),

		Boolean: require('./booleans'),
		boolean: require('./booleans'),
		Booleans: require('./booleans'),
		booleans: require('./booleans'),

		Number: require('./numbers'),
		number: require('./numbers'),
		Numbers: require('./numbers'),
		numbers: require('./numbers'),

		String: require('./strings'),
		string: require('./strings'),
		Strings: require('./strings'),
		strings: require('./strings'),

		Function: require('./functions'),
		function: require('./functions'),
		Functions: require('./functions'),
		functions: require('./functions'),

		Array: require('./arrays'),
		array: require('./arrays'),
		Arrays: require('./arrays'),
		arrays: require('./arrays'),

		Object: require('./objects'),
		object: require('./objects'),
		Objects: require('./objects'),
		objects: require('./objects'),

		Date: require('./dates'),
		date: require('./dates'),
		Dates: require('./dates'),
		dates: require('./dates'),

		Utils: require('./utils'),
		utils: require('./utils'),

};

/**
* legacy alias for Vet.Array.isArray
*/
Vet.isArray = Vet.Array.isArray;

/**
* legacy alias for Vet.Boolean.isBoolean
*/
Vet.isBoolean = Vet.Boolean.isBoolean;

/**
* legacy alias for Vet.Function.isFunction
*/
Vet.isFunction = Vet.Function.isFunction;

/**
* legacy alias for Vet.Number.isNumber
*/
Vet.isNumber = Vet.Number.isNumber;

/**
* legacy alias for Vet.Object.isObject
*/
Vet.isObject = Vet.Object.isObject;

/**
* legacy alias for Vet.String.isString
*/
Vet.isString = Vet.String.isString;

/**
* legacy alias for Vet.Utils.assert
*/
Vet.assert = Vet.Utils.assert;


module.exports = Vet;
