
const isObject = (val) => (val != null) && (Object(val) === val);

const propertyIsEnumerable = Object.prototype.propertyIsEnumerable;

/**
* Builds an object validator that checks the properties of the object
* NOTE: This only checks enumerable properties
* @param validator - the validator function run against the array children
* @returns a function that returns true if the value is an object, and all of the object properties pass the validator
* @memberof vet.objects
*/
const isObjectOf = (validator) => (obj) => {
	if (!isObject(obj)) { return false; }
	for (let key in obj) {
		if (propertyIsEnumerable.call(obj, key)) {
			const val = obj[key];
			if (!validator(val, key)) { return false; }
		}
	}
	return true;
};

module.exports = isObjectOf;
