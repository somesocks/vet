
import Assertion from '../types/Assertion';
import Validator from '../types/Validator';
import ExtendedValidator from '../types/ExtendedValidator';
import { ValidatorType } from '../types';

import isObject from './isObject';

import assert from '../utils/assert';

// eslint-disable-next-line @typescript-eslint/unbound-method
const propertyIsEnumerable = Object.prototype.propertyIsEnumerable;

type IsObjectOfValidator<T> = ExtendedValidator<Record<any, ValidatorType<T>>>;

/**
* Builds an object validator that checks the properties of the object
* NOTE: This only checks enumerable properties
* @param validator - the validator function run against the array children
* @returns a function that returns true if the value is an object, and all of the object properties pass the validator
* @memberof vet.objects
*/
const isObjectOf = function isObjectOf<T extends Function>(validator : T) : IsObjectOfValidator<T> {
	const res = function(obj) {
		if (!isObject(obj)) { return false; }
		for (let key in obj) {
			if (propertyIsEnumerable.call(obj, key)) {
				let val = obj[key];
				if (!validator(val, key)) { return false; }
			}
		}
		return true;
	} as ExtendedValidator;

	res.assert = assert(res);

	return res;
};

export = isObjectOf;
