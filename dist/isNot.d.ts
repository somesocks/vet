import ExtendedValidator from './types/ExtendedValidator';
/**
* a function that inverts the result of a validator
* @param {function} validator - validator to invert
* @returns a wrapper function that inverts the result of a validator
* @memberof vet
* @example
* ```javascript
* let isNot from 'vet/isNot');
* let isNumber from 'vet/numbers/isNumber');
*
* let check = isNot(isNumber);
*
* check(1); // returns false
*
* check(null); // returns true
* ```
*/
declare function isNot<T extends Function>(validator: T): ExtendedValidator;
export default isNot;
