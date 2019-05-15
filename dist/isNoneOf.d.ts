
type validator = ( val : any ) => boolean;

type param = validator | any;

/**
* Constructs a function that checks equality against any number of arguments
* @param {...*} eq - values to check equality against
* @returns a function that takes in a parameter val, and returns true if val is NOT equal to any of the options in ...eq
* @memberof vet
* @example
* ```javascript
* let isNoneOf = require('vet/isNoneOf');
*
* let check = isNoneOf(1, 2, 3);
*
* check(1); // returns false
*
* check(4); // returns true
* ```
*/
declare function isNoneOf(...vals : param[]): validator;

export default isNoneOf;
