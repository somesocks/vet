import ExtendedValidator from '../types/ExtendedValidator';
/**
* Checks to see if a value is an array
* @name isArray
* @param val - the value to check
* @returns true if the value is an array
* @memberof vet.arrays
* @example
* ```javascript
* let isArray from 'vet/arrays/isArray');
*
* isArray(null); // returns false
* isArray({}); // returns false
*
* isArray([]); // returns true
* ```
*/
declare const isArray: ExtendedValidator<any[]>;
export = isArray;
