
type Assertion<T = any> = {
	(val : any) : asserts val is T,
}

export default Assertion;
