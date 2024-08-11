import ExtendedValidator from './types/ExtendedValidator';
/**
* A function to check for null
* @param val - a value to check
* @returns true if val is strictly null
* @memberof vet
* @example
* ```javascript
* let isNull from 'vet/isNull');
*
* isNull(undefined); // returns false
* isNull({}); // returns false
*
* isNull(null); // returns true
* ```
*/
declare const isNull: ExtendedValidator<null>;
export default isNull;
