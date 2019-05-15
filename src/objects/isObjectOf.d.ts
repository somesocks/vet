
type validator = ( val : any ) => boolean;

/**
* Builds an object validator that checks the properties of the object
* NOTE: This only checks enumerable properties
* @param validator - the validator function run against the array children
* @returns a function that returns true if the value is an object, and all of the object properties pass the validator
* @memberof vet.objects
*/
declare function isObjectOf(val : validator): validator;

export default isObjectOf;
