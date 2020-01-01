import ExtendedValidator from './types/ExtendedValidator';
/**
* A function to check for undefined
* @param val - a value to check
* @returns true if val is strictly undefined
* @memberof vet
* @example
* ```javascript
* let isUndefined from 'vet/isUndefined');
*
* isUndefined({}); // returns false
* isUndefined(null); // returns false
*
* isUndefined(undefined); // returns true
* ```
*/
declare const isUndefined: ExtendedValidator;
export = isUndefined;
