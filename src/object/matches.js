
const isFunction = (val) => typeof val === 'function';

const isObject = (val) =>
	val !== null
	&& (typeof val === 'function' || typeof val === 'object');

const matchesSchema = (schema, object) => {
	if (isFunction(schema)) {
		return schema(object);
	} else if (isObject(schema)) {
		if (!isObject(object)) { return false; }

		for(let key in schema) {
			const s = schema[key];
			const o = object[key];
			if (!matchesSchema(s, o)) { return false; }
		}

		return true;
	} else {
		return object === schema;
	}
};

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
* @memberof Vet.Object
*/
const matches = (schema) => (val) => matchesSchema(schema, val);

module.exports = matches;
