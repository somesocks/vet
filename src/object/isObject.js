
const isObject = (val) =>
	val !== null
	&& (typeof val === 'function' || typeof val === 'object');

module.exports = isObject;
