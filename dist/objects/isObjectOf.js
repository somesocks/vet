import isObject from './isObject.js';
import assert from '../utils/assert.js';
// eslint-disable-next-line @typescript-eslint/unbound-method
const propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
/**
* Builds an object validator that checks the properties of the object
* NOTE: This only checks enumerable properties
* @param validator - the validator function run against the array children
* @returns a function that returns true if the value is an object, and all of the object properties pass the validator
* @memberof vet.objects
*/
const isObjectOf = function isObjectOf(validator) {
    const res = function (obj) {
        if (!isObject(obj)) {
            return false;
        }
        for (let key in obj) {
            if (propertyIsEnumerable.call(obj, key)) {
                let val = obj[key];
                if (!validator(val, key)) {
                    return false;
                }
            }
        }
        return true;
    };
    res.assert = assert(res);
    return res;
};
export default isObjectOf;
