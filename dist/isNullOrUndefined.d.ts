import ExtendedValidator from './types/ExtendedValidator';
/**
* A function to check for null or undefined
* @param val - a value to check
* @returns true if val is loosely null (strictly null or undefined)
* @memberof vet
* @example
* ```javascript
* let isNullOrUndefined from 'vet/isNullOrUndefined');
*
* isNullOrUndefined({}); // returns false
*
* isNullOrUndefined(undefined); // returns true
* isNullOrUndefined(null); // returns true
* ```
*/
declare const isNullOrUndefined: ExtendedValidator;
export = isNullOrUndefined;
