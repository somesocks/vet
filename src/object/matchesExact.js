
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

const matchesExact = (schema) => (val) => matchesSchemaExact(schema, val);

module.exports = matchesExact;
