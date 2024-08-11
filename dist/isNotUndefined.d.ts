import ExtendedValidator from './types/ExtendedValidator';
/**
* A function to check for undefined
* @param val - a value to check
* @returns true if val is strictly not undefined
* @memberof vet
* @example
* ```javascript
* let isNotUndefined from 'vet/isNotUndefined');
*
* isNotUndefined(undefined); // returns false
*
* isNotUndefined(null); // returns true
* isNotUndefined({}); // returns true
* ```
*/
declare const isNotUndefined: ExtendedValidator;
export default isNotUndefined;
