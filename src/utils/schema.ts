
// eslint-disable-next-line
const isArray = Array.isArray ||
	((val) => Object.prototype.toString.call(val) === '[object Array]');

const schema = (val ?: any, seen ?: any[]) => {
	const _type : string = typeof val;

	if (seen != null && seen.includes(val)) {
		return '(circular ref.)';
	}

	switch (_type) {
		case 'undefined':
		case 'boolean':
		case 'number':
		case 'string':
		case 'symbol':
			return _type;
		case 'function':
			return val.schema || val.name || 'function';
		case 'object':
			if (val === null) {
				return 'null';
			} else if (isArray(val)) {
				seen = seen || []; seen.push(val);
				let str = '[ ';
				for (let i = 0; i < val.length; i++) {
					str += schema(val[i], seen) + ', ';
				}
				str += ']';
				return str;
			} else {
				seen = seen || []; seen.push(val);
				let str = '{ ';
				for (const k in val) {
					str += k + ': ' + schema(val[k], seen) + ', ';
				}
				str += '}';
				return str;
			}
		default:
			return '?';
	}
};

export default schema;
