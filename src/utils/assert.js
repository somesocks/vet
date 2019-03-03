
const messageBuilder = (log) => (typeof log === 'function' ? log : ((...args) => log));

/**
* Wraps a validator, and throws an error if it returns false.
*
* This is useful for some code that expects assertion-style validation.
* @param validator - the validator to wrap
* @param message - an optional message string to pass into the error
* @returns a function that returns null if the arguments pass validation, or throws an error if they do not
* @memberof vet.utils
*/
const assert = (validator, message) => {
	message = messageBuilder(message || 'Vet.utils.assert error!');

	const wrapper = (...args) => {
		if (validator(...args)) {
			return true;
		} else {
			throw new Error(message(...args));
		}
	};

	return wrapper;
};

module.exports = assert;
