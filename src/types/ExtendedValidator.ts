
import Assertion from './Assertion';
import Validator from './Validator';

type ExtendedValidator =
	Validator &
	{
		assert : Assertion,
	};

export default ExtendedValidator;
