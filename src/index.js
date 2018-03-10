/** @namespace vet */

const Vet = Object.assign(
	{},
	require('./base'),
	{

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
	}
);

/**
* alias for Vet.Array.isArray
*/
Vet.isArray = Vet.Array.isArray;

/**
* alias for Vet.Boolean.isBoolean
*/
Vet.isBoolean = Vet.Boolean.isBoolean;

/**
* alias for Vet.Function.isFunction
*/
Vet.isFunction = Vet.Function.isFunction;

/**
* alias for Vet.Number.isNumber
*/
Vet.isNumber = Vet.Number.isNumber;

/**
* alias for Vet.Object.isObject
*/
Vet.isObject = Vet.Object.isObject;

/**
* alias for Vet.String.isString
*/
Vet.isString = Vet.String.isString;

/**
* alias for Vet.Utils.assert
*/
Vet.assert = Vet.Utils.assert;

/**
* alias for Vet.Array
*/
Vet.array = Vet.Array;

/**
* alias for Vet.Boolean
*/
Vet.boolean = Vet.Boolean;

/**
* alias for Vet.Function
*/
Vet.function = Vet.Function;

/**
* alias for Vet.Number
*/
Vet.number = Vet.Number;

/**
* alias for Vet.Object
*/
Vet.object = Vet.Object;

/**
* alias for Vet.String
*/
Vet.string = Vet.String;

/**
* alias for Vet.Date
*/
Vet.date = Vet.Date;

/**
* alias for Vet.Utils
*/
Vet.utils = Vet.Utils;

module.exports = Vet;
