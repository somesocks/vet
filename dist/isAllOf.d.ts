import ExtendedValidator from './types/ExtendedValidator';
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
declare function isAllOf(...args: any[]): ExtendedValidator;
export = isAllOf;
