
const messageBuilder = (log) => (typeof log === 'function' ? log : ((...args) => log));

/**
* Wraps a function in a validator which checks its arguments, and throws an error if the arguments are bad.
*
* @param func - the function to wrap
* @param validator - the validator function.  This gets passed the arguments as an array
* @param message - an optional message string to pass into the error thrown
* @returns a wrapped function that throws an error if the arguments do not pass validation
* @memberof Vet.Utils
*/
const accepts = (func, validator, message) => {
	message = messageBuilder(message || 'Vet.utils.accepts error!');

	const wrapper = (...args) => {
		if(validator(args)) {
			return func(...args);
		} else {
			throw new Error(message(...args));
		}
	};

	return wrapper;
};

module.exports = accepts;
