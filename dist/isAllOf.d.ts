import ExtendedValidator from './types/ExtendedValidator';
import ValidatorType from './types/ValidatorType';
declare type BoxedValidatorTypes<T extends any[]> = {
    [P in keyof T]: {
        _box: ValidatorType<T[P]>;
    };
}[Exclude<keyof T, keyof any[]>];
declare type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;
declare type UnboxIntersection<T> = T extends {
    _box: infer U;
} ? U : never;
declare type IsAllOfType<T extends any[]> = UnboxIntersection<UnionToIntersection<BoxedValidatorTypes<T>>>;
declare type IsAllOfValidator<T extends any[]> = ExtendedValidator<IsAllOfType<T>>;
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
declare function isAllOf<T extends any[]>(...args: T): IsAllOfValidator<T>;
export = isAllOf;
