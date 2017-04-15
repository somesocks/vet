
const Valid = Object.assign(
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

Valid.isArray = Valid.Array.isArray;
Valid.isBoolean = Valid.Boolean.isBoolean;
Valid.isFunction = Valid.Function.isFunction;
Valid.isNumber = Valid.Number.isNumber;
Valid.isObject = Valid.Object.isObject;
Valid.isString = Valid.String.isString;

module.exports = Valid;
