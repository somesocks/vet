import ExtendedValidator from './types/ExtendedValidator';
/**
* A function to check for null or undefined
* @param val - a value to check against null and undefined
* @returns true if val is loosely not null (strictly not null or undefined)
* @memberof vet
* @example
* ```javascript
* let isNotNullOrUndefined from 'vet/isNotNullOrUndefined');
*
* isNotNullOrUndefined(null); // returns false
* isNotNullOrUndefined(undefined); // returns false
*
* isNotNullOrUndefined({}); // returns true
* ```
*/
declare const isNotNullOrUndefined: ExtendedValidator;
export = isNotNullOrUndefined;
