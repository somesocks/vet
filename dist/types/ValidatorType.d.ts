import Validator from './Validator';
import GenericValidator from './GenericValidator';
type ValidatorType<T> = T extends Validator<infer U> ? U : (T extends GenericValidator ? unknown : T);
export default ValidatorType;
