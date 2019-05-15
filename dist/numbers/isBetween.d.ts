
type validator = (val : any) => boolean;

/**
* construct a validator to check if a value is between two numbers
* @param {number} lower - the lower boundary value to check against
* @param {number} upper - the upper boundary value to check against
* @returns {function} - a validator function
* @memberof vet.numbers
*/
declare function isBetween(lower : number, upper: number): validator;

declare namespace isBetween {

	/**
	* @name exclusive
	* @param {number} lower - the lower boundary value to check against
	* @param {number} upper - the upper boundary value to check against
	* @returns {function} - a validator function
	* @memberof vet.numbers.isBetween
	*/
	function exclusive(lower : number, upper: number): validator;

	/**
	* @name inclusive
	* @param {number} lower - the lower boundary value to check against
	* @param {number} upper - the upper boundary value to check against
	* @returns {function} - a validator function
	* @memberof vet.numbers.isBetween
	*/
	function inclusive(lower : number, upper: number): validator;

}

export default isBetween;
