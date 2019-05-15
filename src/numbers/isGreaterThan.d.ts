
type validator = (val : any) => boolean;

/**
* construct a validator to check if a value is greater than a number
* @param {number} bound - the boundary value to check agains
* @returns {function} - a validator function
* @memberof vet.numbers
*/
declare function isGreaterThan(val : number): validator;

declare namespace isGreaterThan {

	/**
	* @name exclusive
	* @param {number} bound - the boundary value to check against
	* @returns {function} - a validator function
	* @memberof vet.numbers.isGreaterThan
	*/
	function exclusive(val : number): validator;

	/**
	* @name inclusive
	* @param {number} bound - the boundary value to check against
	* @returns {function} - a validator function
	* @memberof vet.numbers.isGreaterThan
	*/
	function inclusive(val : number): validator;

}

export default isGreaterThan;
