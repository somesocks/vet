"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line
var isArray = Array.isArray ||
    (function (val) { return Object.prototype.toString.call(val) === '[object Array]'; });
var schema = function (val, seen) {
    var _type = typeof val;
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
            }
            else if (isArray(val)) {
                seen = seen || [];
                seen.push(val);
                var str = '[ ';
                for (var i = 0; i < val.length; i++) {
                    str += schema(val[i], seen) + ', ';
                }
                str += ']';
                return str;
            }
            else if (val.__proto__ != null
                && (typeof val.__proto__.name === 'string')
                && val.__proto__.name !== 'Object') {
                return val.__proto__.name + '()';
            }
            else if (val.constructor != null
                && (typeof val.constructor.name === 'string')
                && val.constructor.name !== 'Object') {
                return val.constructor.name + '()';
            }
            else {
                seen = seen || [];
                seen.push(val);
                var str = '{ ';
                for (var k in val) {
                    str += k + ': ' + schema(val[k], seen) + ', ';
                }
                str += '}';
                return str;
            }
        default:
            return '?';
    }
};
exports.default = schema;
