
type Validator<T = any> = {
	(this : any, arg ?: T | any, ...rest : any[]) : boolean,
}

export default Validator;
