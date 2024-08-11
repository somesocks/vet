import ExtendedValidator from './types/ExtendedValidator';
import ValidatorType from './types/ValidatorType';
type IsOneOfType<T extends any[]> = ValidatorType<T[number]>;
type IsOneOfValidator<T extends any[]> = ExtendedValidator<IsOneOfType<T>>;
/**
* Constructs a function that checks equality against any number of arguments
* @param {...*} eq - values to check equality against
* @returns a function that takes in a parameter val, and returns true if val is equal to any of the options in ...eq
* @memberof vet
* @example
* ```javascript
* let isOneOf from 'vet/isOneOf');
*
* let check = isOneOf(1, 2, 3);
*
* check(4); // returns false
*
* check(1); // returns true
* ```
*/
declare function isOneOf<T extends any[]>(...args: T): IsOneOfValidator<T>;
export default isOneOf;
