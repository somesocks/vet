
import Assertion from './Assertion';
import Validator from './Validator';

type ExtendedValidator<T = any> =
	Validator<T> &
	{
		assert : Assertion<T>,
	};

export default ExtendedValidator;
