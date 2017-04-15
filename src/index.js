/** @namespace Vet */


const Vet = Object.assign(
	{},
	require('./base'),
	{
		Array: require('./array'),
		Boolean: require('./boolean'),
		Function: require('./function'),
		Number: require('./number'),
		Object: require('./object'),
		String: require('./string'),
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

module.exports = Vet;
