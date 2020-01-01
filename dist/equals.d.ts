import ExtendedValidator from './types/ExtendedValidator';
/**
* Builds an curried equal function
* @param eq - value to check equality against
* @returns a function that takes in one parameter val, and returns true if val === eq
* @memberof vet
* @example
* ```javascript
* let equals from 'vet/equals');
*
* let is3 = equals(3);
*
* is3(null); // returns false
* is3({}); // returns false
*
* is3(3); // returns true
* ```
*/
declare function equals(eq: any): ExtendedValidator;
export = equals;
