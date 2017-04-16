/** @namespace Vet */


const Vet = Object.assign(
	{},
	require('./base'),
	{
		Boolean: require('./boolean'),
		Number: require('./number'),
		String: require('./string'),
		Function: require('./function'),
		Array: require('./array'),
		Object: require('./object'),
		Utils: require('./utils'),
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
* alias for Vet.Utils
*/
Vet.utils = Vet.Utils;

module.exports = Vet;
