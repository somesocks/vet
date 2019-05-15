
type validator = ( val : any ) => boolean;

type param = validator | any;

/**
* Constructs a function that checks equality against any number of arguments
* @param {...*} eq - values to check equality against
* @returns a function that takes in a parameter val, and returns true if val is equal to any of the options in ...eq
* @memberof vet
* @example
* ```javascript
* let isAllOf = require('vet/isAllOf');
* let isNumber = require('vet/numbers/isNumber');
* let isPositive = require('vet/numbers/isPositive');
*
* let check = isAllOf(isNumber, isPositive);
*
* check(-1); // returns false
*
* check(1); // returns true
* ```
*/
declare function isAllOf(...vals : param[]): validator;

export default isAllOf;
