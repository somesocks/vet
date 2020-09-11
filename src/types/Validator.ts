
type TypedValidator<T = any> = {
	(val : any, ...rest : any[]) : val is T,
}

export default TypedValidator;
