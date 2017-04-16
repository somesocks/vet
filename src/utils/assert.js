
/**
* Wraps a validator, and throws an error if it returns false.
*
* This is useful for some libraries (like React) that expect
* assertion-style validation.
* @param validator - the validator to wrap
* @param message - an optional message string to pass into the error
* @returns a function that returns null if the arguments pass validation, or throws an error if they do not
* @memberof Vet.Utils
*/
const assert = (validator, message) => (...args) => {
	if(validator(...args)) {
		return;
	} else {
		throw new Error(message || 'Vet assertion error!');
	}
};

module.exports = assert;
