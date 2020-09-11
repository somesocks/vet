
import Assertion from './types/Assertion';
import Validator from './types/Validator';
import ExtendedValidator from './types/ExtendedValidator';
import ValidatorType from './types/ValidatorType';


import assert from './utils/assert';
import schema from './utils/schema';

function isFunction(val) { return typeof val === 'function'; }

type BoxedValidatorTypes<T extends any[]> = {
  [P in keyof T] : { _box : ValidatorType<T[P]> }
} [Exclude<keyof T, keyof any[]>];

type UnionToIntersection<U> = (U extends any ? (k : U) => void : never) extends ((k : infer I) => void) ? I : never;

type UnboxIntersection<T> = T extends { _box : infer U } ? U : never;

type IsAllOfType<T extends any[]> = UnboxIntersection<UnionToIntersection<BoxedValidatorTypes<T>>>

type IsAllOfValidator<T extends any[]> = ExtendedValidator<IsAllOfType<T>>;

/**
* Constructs a function that checks equality against any number of arguments
* @param {...*} eq - values to check equality against
* @returns a function that takes in a parameter val, and returns true if val is equal to any of the options in ...eq
* @memberof vet
* @example
* ```javascript
* let isAllOf from 'vet/isAllOf');
* let isNumber from 'vet/numbers/isNumber');
* let isPositive from 'vet/numbers/isPositive');
*
* let check = isAllOf(isNumber, isPositive);
*
* check(-1); // returns false
*
* check(1); // returns true
* ```
*/
function isAllOf<T extends any[]>(...args : T) : IsAllOfValidator<T> {
	const validators = arguments;

	const res : ExtendedValidator = function (val) {
		for (let i = 0; i < validators.length; i++) {
			const validator = validators[i];
			const check = typeof validator === 'function' ?
				validator(val) :
				(val === validator);

			if (!check) { return false; }
		}

		return true;
	} as ExtendedValidator;

	res.assert = function _assert(val) {
		for (let i = 0; i < validators.length; i++) {
			const validator = validators[i];
			if (typeof validator === 'function') {
				if (typeof validator.assert === 'function') {
					validator.assert(val);
				} else {
					assert(validator)(val);
				}
			} else {
				assert(val === validator);
			}
		}

		return;
	};

	let s = 'isAllOf(';
	for (let i = 0; i < validators.length; i++) {
		s += schema(validators[i]) + ', ';
	}
	s += ')';
	res.schema = s;

	return res;
}



export = isAllOf;
