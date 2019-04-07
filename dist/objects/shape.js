
function isFunction(val) { return typeof val === 'function'; }

function isObject(val) { return (val != null) && (Object(val) === val); }

function _shape(schema, object) {
	if (isFunction(schema)) {
		return schema(object);
	} else if (isObject(schema)) {
		if (!isObject(object)) { return false; }

		for(var key in schema) {
			var s = schema[key];
			var o = object[key];
			if (!_shape(s, o)) { return false; }
		}

		return true;
	} else {
		return object === schema;
	}
}

function _shapeExact (schema, object) {
	if (isFunction(schema)) {
		return schema(object);
	} else if (isObject(schema)) {
		if (!isObject(object)) { return false; }

		for (var key in schema) {
			var s = schema[key];
			var o = object[key];
			if (!_shapeExact(s, o)) { return false; }
		}

		for (var key in object) {
			var s = schema[key];
			var o = object[key];
			if (!_shapeExact(s, o)) { return false; }
		}

		return true;
	} else {
		return object === schema;
	}
}

/**
* Builds a function to check an object against a schema object
*
* A schema object consists of an object with child object, functions, and values
*
* The schema matching process is this:
* 1) For each child in the schema object, match it against the corresponding child in the value to be checked
* 2) If the schema child is a function, treat it as a validator function
* 3) If the schema child is an object, recursively call the schema matching
* 4) If the schema child is anything else, check for strict equality
* @param schema - the object schema to check
* @returns a validator function that takes in a value val, and returns true if val matches the object schema
* @memberof vet.objects
*/
function shape(schema) {
	return _shape.bind(undefined, schema);
}

/**
* Builds a function to check an object against a schema object
*
* This function works similarly to Vet.Object.matches,
* but it also checks to make sure every value in the object to check
* has a corresponding validator in the schema
* @param schema - the object schema to check
* @returns a validator function that takes in a value val, and returns true if val matches the object schema exactly
* @memberof vet.objects.shape
*/
shape.exact = function shapeExact(schema) {
	return _shapeExact.bind(undefined, schema);
}

module.exports = shape;
