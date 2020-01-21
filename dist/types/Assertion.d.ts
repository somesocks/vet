declare type Assertion<T = any> = {
    (this: any, arg: T, ...rest: any[]): asserts arg is T;
};
export default Assertion;
