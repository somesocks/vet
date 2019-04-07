
function isFunction(val) { return typeof val === 'function'; }

function isObject(val) { return (val != null) && (Object(val) === val); }

function matchesSchemaExact (schema, object) {
	if (isFunction(schema)) {
		return schema(object);
	} else if (isObject(schema)) {
		if (!isObject(object)) { return false; }

		for (var key in schema) {
			var s = schema[key];
			var o = object[key];
			if (!matchesSchemaExact(s, o)) { return false; }
		}

		for (var key in object) {
			var s = schema[key];
			var o = object[key];
			if (!matchesSchemaExact(s, o)) { return false; }
		}

		return true;
	} else {
		return object === schema;
	}
}

/**
* Builds a function to check an object against a schema object
*
* This function works similarly to Vet.Object.matches,
* but it also checks to make sure every value in the object to check
* has a corresponding validator in the schema
* @param schema - the object schema to check
* @returns a validator function that takes in a value val, and returns true if val matches the object schema exactly
* @memberof vet.objects
*/
function matchesExact(schema) {
	return function(val) { return matchesSchemaExact(schema, val); }
}

module.exports = matchesExact;
