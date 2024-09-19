import ExtendedValidator from './types/ExtendedValidator.js';
/**
* A default validator, that always returns true.
* This can be useful to spec out parameters that you don't wish to validate,
* but need to document for future work.
* @param val - a value to check
* @returns true
* @memberof vet
* @example
* ```javascript
*
* import isAny from 'vet/isAny';
*
* isAny(null); // returns true
* isAny(undefined); // returns true
* isAny({}); // returns true
*
* ```
*/
declare const isAny: ExtendedValidator;
export default isAny;
