import Assertion from './Assertion';
import Validator from './Validator';
declare type ExtendedValidator = Validator & {
    assert: Assertion;
};
export default ExtendedValidator;
