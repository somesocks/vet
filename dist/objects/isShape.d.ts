import Validator from '../types/Validator';
import ExtendedValidator from '../types/ExtendedValidator';
declare type _TSchema<T> = (T extends Validator ? _TValidator<T> : (T extends Function ? _TFunction<T> : T extends object ? _TObject<T> : T));
declare type _TValidator<T> = (T extends Validator<infer U> ? U : never);
declare type _TFunction<T> = (T extends Function ? any : never);
declare type _TObject<T> = T extends object ? {
    [U in keyof ({
        [K in {
            [K in keyof {
                [key in keyof T]: _TSchema<T[key]>;
            }]-?: {
                [key in keyof T]: _TSchema<T[key]>;
            }[K] | undefined extends {
                [key in keyof T]: _TSchema<T[key]>;
            }[K] ? never : K;
        }[keyof {
            [key in keyof T]: _TSchema<T[key]>;
        }]]: {
            [key in keyof T]: _TSchema<T[key]>;
        }[K];
    } & {
        [K in {
            [K in keyof {
                [key in keyof T]: _TSchema<T[key]>;
            }]-?: {
                [key in keyof T]: _TSchema<T[key]>;
            }[K] | undefined extends {
                [key in keyof T]: _TSchema<T[key]>;
            }[K] ? K : never;
        }[keyof {
            [key in keyof T]: _TSchema<T[key]>;
        }]]?: {
            [key in keyof T]: _TSchema<T[key]>;
        }[K];
    })]: {
        [key in keyof T]: _TSchema<T[key]>;
    }[U];
} : never;
/**
* Builds a function to check an object against a schema object
*
* A schema object consists of an object with child object, functions, and values
*
* The schema matching process is as follows:
*
* 1) For each child in the schema object, match it against the corresponding child in the value to be checked
*
* 2) If the schema child is a function, treat it as a validator function
*
* 3) If the schema child is an object, recursively call the schema matching
*
* 4) If the schema child is anything else, check for strict equality
*
* @param schema - the object schema to check
* @returns a validator function that takes in a value val, and returns true if val matches the object schema
* @memberof vet.objects
* @example
* ```javascript
* let isString from 'vet/strings/isString');
* let isNumber from 'vet/numbers/isNumber');
* let isBoolean from 'vet/booleans/isBoolean');
* let isShape from 'vet/objects/isShape');
*
* let isPerson = isShape({
*   name: isString,
*   age: isNumber,
*   alive: isBoolean,
* });
*
* // returns false
* isPerson({});
*
* // returns false, no 'alive' flag
* isPerson({ name: 'John Doe', age: 12 });
*
* // returns true
* isPerson({ name: 'John Doe', age: 12, alive: true });
* ```
*/
declare function isShape<V extends object>(schema: V): ExtendedValidator<_TSchema<V>>;
declare namespace isShape {
    var exact: <V extends object>(schema: V) => ExtendedValidator<_TSchema<V>>;
    var partial: <V extends object>(schema: V) => ExtendedValidator<_deepPartial<_TSchema<V>>>;
}
declare type _basic = null | undefined | string | number | boolean | symbol | bigint | Date | ((...args: any[]) => unknown) | any[];
declare type _deepPartial<T> = T extends _basic ? T : T extends object ? {
    [KeyType in keyof T]?: _deepPartial<T[KeyType]> | undefined;
} : unknown;
export = isShape;
