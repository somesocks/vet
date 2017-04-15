
const isFunction = (val) => typeof val === 'function';

const isObject = (val) =>
	val !== null
	&& (typeof val === 'function' || typeof val === 'object');

const matchesSchemaExact = (schema, object) => {
	if (isFunction(schema)) {
		return schema(object);
	} else if (isObject(schema)) {
		if (!isObject(object)) { return false; }

		for (let key in schema) {
			const s = schema[key];
			const o = object[key];
			if (!matchesSchemaExact(s, o)) { return false; }
		}

		for (let key in object) {
			const s = schema[key];
			const o = object[key];
			if (!matchesSchemaExact(s, o)) { return false; }
		}

		return true;
	} else {
		return object === schema;
	}
};

/**
* Builds a function to check an object against a schema object
*
* This function works similarly to Vet.Object.matches,
* but it also checks to make sure every value in the object to check
* has a corresponding validator in the schema
* @param schema - the object schema to check
* @returns a validator function that takes in a value val, and returns true if val matches the object schema exactly
* @memberof Vet.Object
*/
const matchesExact = (schema) => (val) => matchesSchemaExact(schema, val);

module.exports = matchesExact;
