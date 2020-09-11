
import Validator from './Validator';
import GenericValidator from './GenericValidator';

type ValidatorType<T> = T extends Validator<infer U> ? U : (T extends GenericValidator ? unknown : T);

let a : GenericValidator = (foo) => foo%2 === 0;
let b : ValidatorType<typeof a>;

let c : Validator<number> = (foo) : foo is number => foo%2 === 0;
let d : ValidatorType<typeof c>;

export default ValidatorType;
