
/**
* Alias for `vet/isNotNullOrUndefined`
* @param val - value to check
* @returns true if val is not null or undefined
* @memberof vet
* @example
* ```javascript
*
* let exists = require('vet/exists');
*
* exists(null); // returns false
* exists(undefined); // returns false
* exists({}); // returns true
*
* ```
*/
function exists (val) {
	return val != null;
}

module.exports = exists;
