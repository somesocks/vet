
type validator = (val : any) => boolean;

/**
* Builds a function to check if a value is a string of length len
* @param len - the desired length of string
* @returns a function that takes in a value val, and returns true if val is a string of length len
* @memberof vet.strings
*/
declare function isLength(val : number): validator;

export default isLength;
