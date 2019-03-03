
/**
* ```javascript
*
* let isUndefined = require('vet/isUndefined');
*
* isUndefined({}); // returns false
* isUndefined(null); // returns false
*
* isUndefined(undefined); // returns true
*
* ```
* A function to check for undefined
* @param val - a value to check
* @returns true if val is strictly undefined
* @memberof vet
*/
const isUndefined = (val) => val === undefined;

module.exports = isUndefined;
