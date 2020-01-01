import Validator from './types/Validator';
import ExtendedValidator from './types/ExtendedValidator';
/**
* A function builder to optionally check a value
* @param validator - a validator function
* @returns a function that takes in a value, and returns true if the value does not exist, or the validator returns true
* @memberof vet
* @example
* ```javascript
* let optional from 'vet/optional');
* let isNumber from 'vet/numbers/isNumber');
*
* let isMaybeNumber = optional(isNumber);
*
* isMaybeNumber(null); // returns false
* isMaybeNumber("1"); // returns false
*
* isMaybeNumber(1); // returns true
* isMaybeNumber(undefined); // returns true
* ```
*/
declare function optional(validator: Validator): ExtendedValidator;
export = optional;
