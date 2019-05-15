
type validator = (val : any) => boolean;

/**
* construct a validator to check if a value is less than a number
* @param {number} bound - the boundary value to check agains
* @returns {function} - a validator function
* @memberof vet.numbers
*/
declare function isLessThan(val : number): validator;

declare namespace isLessThan {

	/**
	* @name exclusive
	* @param {number} bound - the boundary value to check against
	* @returns {function} - a validator function
	* @memberof vet.numbers.isLessThan
	*/
	function exclusive(val : number): validator;

	/**
	* @name inclusive
	* @param {number} bound - the boundary value to check against
	* @returns {function} - a validator function
	* @memberof vet.numbers.isLessThan
	*/
	function inclusive(val : number): validator;

}

export default isLessThan;
