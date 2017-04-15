
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

const matches = (schema) => (val) => matchesSchema(schema, val);

module.exports = matches;
