
import Assertion from './Assertion';
import Validator from './Validator';

type ExtendedValidator =
	Validator &
	{
		assert : Assertion,
		schema ?: string,
	};

export default ExtendedValidator;
