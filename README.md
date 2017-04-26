# vet
A 10kB Javascript library for data validation.

<a name="Vet"></a>

## Vet : <code>object</code>
**Kind**: global namespace  

* [Vet](#Vet) : <code>object</code>
    * [.isArray](#Vet.isArray)
    * [.isBoolean](#Vet.isBoolean)
    * [.isFunction](#Vet.isFunction)
    * [.isNumber](#Vet.isNumber)
    * [.isObject](#Vet.isObject)
    * [.isString](#Vet.isString)
    * [.assert](#Vet.assert)
    * [.array](#Vet.array)
    * [.boolean](#Vet.boolean)
    * [.function](#Vet.function)
    * [.number](#Vet.number)
    * [.object](#Vet.object)
    * [.string](#Vet.string)
    * [.utils](#Vet.utils)
    * [.Array](#Vet.Array) : <code>object</code>
        * [.isArray](#Vet.Array.isArray) ⇒
        * [.isArrayOf(val)](#Vet.Array.isArrayOf) ⇒
        * [.isLength(len)](#Vet.Array.isLength) ⇒
    * [.Boolean](#Vet.Boolean) : <code>object</code>
        * [.isBoolean(val)](#Vet.Boolean.isBoolean) ⇒
        * [.isFalse(val)](#Vet.Boolean.isFalse) ⇒
        * [.isFalsy(val)](#Vet.Boolean.isFalsy) ⇒
        * [.isTrue(val)](#Vet.Boolean.isTrue) ⇒
        * [.isTruthy(val)](#Vet.Boolean.isTruthy) ⇒
    * [.Function](#Vet.Function) : <code>object</code>
        * [.isFunction(val)](#Vet.Function.isFunction) ⇒
    * [.Number](#Vet.Number) : <code>object</code>
        * [.isInteger](#Vet.Number.isInteger) ⇒
        * [.isNegative(val)](#Vet.Number.isNegative) ⇒
        * [.isNonZero(val)](#Vet.Number.isNonZero) ⇒
        * [.isNumber(val)](#Vet.Number.isNumber) ⇒
        * [.isPositive(val)](#Vet.Number.isPositive) ⇒
        * [.isZero(val)](#Vet.Number.isZero) ⇒
    * [.Object](#Vet.Object) : <code>object</code>
        * [.isObject(val)](#Vet.Object.isObject) ⇒
        * [.matchesExact(schema)](#Vet.Object.matchesExact) ⇒
        * [.matches(schema)](#Vet.Object.matches) ⇒
    * [.String](#Vet.String) : <code>object</code>
        * [.isEmpty(val)](#Vet.String.isEmpty) ⇒
        * [.isLength(len)](#Vet.String.isLength) ⇒
        * [.isNotEmpty(val)](#Vet.String.isNotEmpty) ⇒
        * [.isProbablyBase64(val)](#Vet.String.isProbablyBase64) ⇒
        * [.isProbablyDataURL(val)](#Vet.String.isProbablyDataURL) ⇒
        * [.isProbablyEmail(val)](#Vet.String.isProbablyEmail) ⇒
        * [.isProbablyURL(val)](#Vet.String.isProbablyURL) ⇒
        * [.isString(val)](#Vet.String.isString) ⇒
        * [.matches(regex)](#Vet.String.matches) ⇒
    * [.Utils](#Vet.Utils) : <code>object</code>
        * [.accepts(func, validator, message)](#Vet.Utils.accepts) ⇒
        * [.assert(validator, message)](#Vet.Utils.assert) ⇒
        * [.returns(func, validator, message)](#Vet.Utils.returns) ⇒
    * [.equals(eq)](#Vet.equals) ⇒
    * [.exists(val)](#Vet.exists) ⇒
    * [.isOneOf(...eq)](#Vet.isOneOf) ⇒
    * [.isNotNull(val)](#Vet.isNotNull) ⇒
    * [.isNotNullOrUndefined(val)](#Vet.isNotNullOrUndefined) ⇒
    * [.isNotUndefined(val)](#Vet.isNotUndefined) ⇒
    * [.isNull(val)](#Vet.isNull) ⇒
    * [.isNullOrUndefined(val)](#Vet.isNullOrUndefined) ⇒
    * [.isOneOf(...eq)](#Vet.isOneOf) ⇒
    * [.isUndefined(val)](#Vet.isUndefined) ⇒
    * [.matchesAllOf(...validators)](#Vet.matchesAllOf) ⇒
    * [.matchesNoneOf(...validators)](#Vet.matchesNoneOf) ⇒
    * [.matchesOneOf(...validators)](#Vet.matchesOneOf) ⇒
    * [.optional(validator)](#Vet.optional) ⇒

<a name="Vet.isArray"></a>

### Vet.isArray
alias for Vet.Array.isArray

**Kind**: static property of <code>[Vet](#Vet)</code>  
<a name="Vet.isBoolean"></a>

### Vet.isBoolean
alias for Vet.Boolean.isBoolean

**Kind**: static property of <code>[Vet](#Vet)</code>  
<a name="Vet.isFunction"></a>

### Vet.isFunction
alias for Vet.Function.isFunction

**Kind**: static property of <code>[Vet](#Vet)</code>  
<a name="Vet.isNumber"></a>

### Vet.isNumber
alias for Vet.Number.isNumber

**Kind**: static property of <code>[Vet](#Vet)</code>  
<a name="Vet.isObject"></a>

### Vet.isObject
alias for Vet.Object.isObject

**Kind**: static property of <code>[Vet](#Vet)</code>  
<a name="Vet.isString"></a>

### Vet.isString
alias for Vet.String.isString

**Kind**: static property of <code>[Vet](#Vet)</code>  
<a name="Vet.assert"></a>

### Vet.assert
alias for Vet.Utils.assert

**Kind**: static property of <code>[Vet](#Vet)</code>  
<a name="Vet.array"></a>

### Vet.array
alias for Vet.Array

**Kind**: static property of <code>[Vet](#Vet)</code>  
<a name="Vet.boolean"></a>

### Vet.boolean
alias for Vet.Boolean

**Kind**: static property of <code>[Vet](#Vet)</code>  
<a name="Vet.function"></a>

### Vet.function
alias for Vet.Function

**Kind**: static property of <code>[Vet](#Vet)</code>  
<a name="Vet.number"></a>

### Vet.number
alias for Vet.Number

**Kind**: static property of <code>[Vet](#Vet)</code>  
<a name="Vet.object"></a>

### Vet.object
alias for Vet.Object

**Kind**: static property of <code>[Vet](#Vet)</code>  
<a name="Vet.string"></a>

### Vet.string
alias for Vet.String

**Kind**: static property of <code>[Vet](#Vet)</code>  
<a name="Vet.utils"></a>

### Vet.utils
alias for Vet.Utils

**Kind**: static property of <code>[Vet](#Vet)</code>  
<a name="Vet.Array"></a>

### Vet.Array : <code>object</code>
**Kind**: static namespace of <code>[Vet](#Vet)</code>  

* [.Array](#Vet.Array) : <code>object</code>
    * [.isArray](#Vet.Array.isArray) ⇒
    * [.isArrayOf(val)](#Vet.Array.isArrayOf) ⇒
    * [.isLength(len)](#Vet.Array.isLength) ⇒

<a name="Vet.Array.isArray"></a>

#### Array.isArray ⇒
Checks to see if a value is an array

**Kind**: static constant of <code>[Array](#Vet.Array)</code>  
**Returns**: true if the value is an array  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="Vet.Array.isArrayOf"></a>

#### Array.isArrayOf(val) ⇒
Builds an array validator that checks the children of the array

**Kind**: static method of <code>[Array](#Vet.Array)</code>  
**Returns**: a function that returns true if the value is an array, and all of the children pass the validator  

| Param | Description |
| --- | --- |
| val | the validator function run against the array children |

<a name="Vet.Array.isLength"></a>

#### Array.isLength(len) ⇒
Builds an array length checker

**Kind**: static method of <code>[Array](#Vet.Array)</code>  
**Returns**: a function that returns true if the value is an array of length len  

| Param | Description |
| --- | --- |
| len | the length the array shouldbe |

<a name="Vet.Boolean"></a>

### Vet.Boolean : <code>object</code>
**Kind**: static namespace of <code>[Vet](#Vet)</code>  

* [.Boolean](#Vet.Boolean) : <code>object</code>
    * [.isBoolean(val)](#Vet.Boolean.isBoolean) ⇒
    * [.isFalse(val)](#Vet.Boolean.isFalse) ⇒
    * [.isFalsy(val)](#Vet.Boolean.isFalsy) ⇒
    * [.isTrue(val)](#Vet.Boolean.isTrue) ⇒
    * [.isTruthy(val)](#Vet.Boolean.isTruthy) ⇒

<a name="Vet.Boolean.isBoolean"></a>

#### Boolean.isBoolean(val) ⇒
Checks to see if a value is a boolean

**Kind**: static method of <code>[Boolean](#Vet.Boolean)</code>  
**Returns**: true if the value is a boolean  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="Vet.Boolean.isFalse"></a>

#### Boolean.isFalse(val) ⇒
Checks to see if a value is strictly false

**Kind**: static method of <code>[Boolean](#Vet.Boolean)</code>  
**Returns**: true if the value is strictly false  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="Vet.Boolean.isFalsy"></a>

#### Boolean.isFalsy(val) ⇒
Checks to see if a value is loosely false (falsy)

**Kind**: static method of <code>[Boolean](#Vet.Boolean)</code>  
**Returns**: true if the value is loosely false  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="Vet.Boolean.isTrue"></a>

#### Boolean.isTrue(val) ⇒
Checks to see if a value is strictly true

**Kind**: static method of <code>[Boolean](#Vet.Boolean)</code>  
**Returns**: true if the value is strictly true  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="Vet.Boolean.isTruthy"></a>

#### Boolean.isTruthy(val) ⇒
Checks to see if a value is loosely true (truthy)

**Kind**: static method of <code>[Boolean](#Vet.Boolean)</code>  
**Returns**: true if the value loosely true  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="Vet.Function"></a>

### Vet.Function : <code>object</code>
**Kind**: static namespace of <code>[Vet](#Vet)</code>  
<a name="Vet.Function.isFunction"></a>

#### Function.isFunction(val) ⇒
Checks to see if a value is a function

**Kind**: static method of <code>[Function](#Vet.Function)</code>  
**Returns**: true if the value is a function  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="Vet.Number"></a>

### Vet.Number : <code>object</code>
**Kind**: static namespace of <code>[Vet](#Vet)</code>  

* [.Number](#Vet.Number) : <code>object</code>
    * [.isInteger](#Vet.Number.isInteger) ⇒
    * [.isNegative(val)](#Vet.Number.isNegative) ⇒
    * [.isNonZero(val)](#Vet.Number.isNonZero) ⇒
    * [.isNumber(val)](#Vet.Number.isNumber) ⇒
    * [.isPositive(val)](#Vet.Number.isPositive) ⇒
    * [.isZero(val)](#Vet.Number.isZero) ⇒

<a name="Vet.Number.isInteger"></a>

#### Number.isInteger ⇒
Checks to see if a value is an integer

**Kind**: static constant of <code>[Number](#Vet.Number)</code>  
**Returns**: true if the value is an integer  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="Vet.Number.isNegative"></a>

#### Number.isNegative(val) ⇒
Checks to see if a value is a negative number

**Kind**: static method of <code>[Number](#Vet.Number)</code>  
**Returns**: true if the value is a negative number  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="Vet.Number.isNonZero"></a>

#### Number.isNonZero(val) ⇒
Checks to see if a value is a nonzero number

**Kind**: static method of <code>[Number](#Vet.Number)</code>  
**Returns**: true if the value is a nonzero number  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="Vet.Number.isNumber"></a>

#### Number.isNumber(val) ⇒
Checks to see if a value is a number

**Kind**: static method of <code>[Number](#Vet.Number)</code>  
**Returns**: true if the value is a number  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="Vet.Number.isPositive"></a>

#### Number.isPositive(val) ⇒
Checks to see if a value is a positive number

**Kind**: static method of <code>[Number](#Vet.Number)</code>  
**Returns**: true if the value is a positive number  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="Vet.Number.isZero"></a>

#### Number.isZero(val) ⇒
Checks to see if a value is zero

**Kind**: static method of <code>[Number](#Vet.Number)</code>  
**Returns**: true if the value is zero  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="Vet.Object"></a>

### Vet.Object : <code>object</code>
**Kind**: static namespace of <code>[Vet](#Vet)</code>  

* [.Object](#Vet.Object) : <code>object</code>
    * [.isObject(val)](#Vet.Object.isObject) ⇒
    * [.matchesExact(schema)](#Vet.Object.matchesExact) ⇒
    * [.matches(schema)](#Vet.Object.matches) ⇒

<a name="Vet.Object.isObject"></a>

#### Object.isObject(val) ⇒
Checks to see if a value is an object

**Kind**: static method of <code>[Object](#Vet.Object)</code>  
**Returns**: true if the value is an object  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="Vet.Object.matchesExact"></a>

#### Object.matchesExact(schema) ⇒
Builds a function to check an object against a schema object

This function works similarly to Vet.Object.matches,
but it also checks to make sure every value in the object to check
has a corresponding validator in the schema

**Kind**: static method of <code>[Object](#Vet.Object)</code>  
**Returns**: a validator function that takes in a value val, and returns true if val matches the object schema exactly  

| Param | Description |
| --- | --- |
| schema | the object schema to check |

<a name="Vet.Object.matches"></a>

#### Object.matches(schema) ⇒
Builds a function to check an object against a schema object

A schema object consists of an object with child object, functions, and values

The schema matching process is this:
1) For each child in the schema object, match it against the corresponding child in the value to be checked
2) If the schema child is a function, treat it as a validator function
3) If the schema child is an object, recursively call the schema matching
4) If the schema child is anything else, check for strict equality

**Kind**: static method of <code>[Object](#Vet.Object)</code>  
**Returns**: a validator function that takes in a value val, and returns true if val matches the object schema  

| Param | Description |
| --- | --- |
| schema | the object schema to check |

<a name="Vet.String"></a>

### Vet.String : <code>object</code>
**Kind**: static namespace of <code>[Vet](#Vet)</code>  

* [.String](#Vet.String) : <code>object</code>
    * [.isEmpty(val)](#Vet.String.isEmpty) ⇒
    * [.isLength(len)](#Vet.String.isLength) ⇒
    * [.isNotEmpty(val)](#Vet.String.isNotEmpty) ⇒
    * [.isProbablyBase64(val)](#Vet.String.isProbablyBase64) ⇒
    * [.isProbablyDataURL(val)](#Vet.String.isProbablyDataURL) ⇒
    * [.isProbablyEmail(val)](#Vet.String.isProbablyEmail) ⇒
    * [.isProbablyURL(val)](#Vet.String.isProbablyURL) ⇒
    * [.isString(val)](#Vet.String.isString) ⇒
    * [.matches(regex)](#Vet.String.matches) ⇒

<a name="Vet.String.isEmpty"></a>

#### String.isEmpty(val) ⇒
Checks to see if a value is an empty string

**Kind**: static method of <code>[String](#Vet.String)</code>  
**Returns**: true if val is an empty string  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="Vet.String.isLength"></a>

#### String.isLength(len) ⇒
Builds a function to check if a value is a string of length len

**Kind**: static method of <code>[String](#Vet.String)</code>  
**Returns**: a function that takes in a value val, and returns true if val is a string of length len  

| Param | Description |
| --- | --- |
| len | the desired length of string |

<a name="Vet.String.isNotEmpty"></a>

#### String.isNotEmpty(val) ⇒
Checks to see if a value is a non-empty string

**Kind**: static method of <code>[String](#Vet.String)</code>  
**Returns**: true if val is a non-empty string  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="Vet.String.isProbablyBase64"></a>

#### String.isProbablyBase64(val) ⇒
Checks to see if a value is probably a valid base64 string

**Kind**: static method of <code>[String](#Vet.String)</code>  
**Returns**: true if val is probably a valid base64 string  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="Vet.String.isProbablyDataURL"></a>

#### String.isProbablyDataURL(val) ⇒
Checks to see if a value is probably a valid data URL

**Kind**: static method of <code>[String](#Vet.String)</code>  
**Returns**: true if val is probably a valid data URL  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="Vet.String.isProbablyEmail"></a>

#### String.isProbablyEmail(val) ⇒
Checks to see if a value is probably a valid email

**Kind**: static method of <code>[String](#Vet.String)</code>  
**Returns**: true if val is probably a valid email  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="Vet.String.isProbablyURL"></a>

#### String.isProbablyURL(val) ⇒
Checks to see if a value is probably a valid URL

**Kind**: static method of <code>[String](#Vet.String)</code>  
**Returns**: true if val is probably a valid URL  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="Vet.String.isString"></a>

#### String.isString(val) ⇒
Checks to see if a value is a string

**Kind**: static method of <code>[String](#Vet.String)</code>  
**Returns**: true if val is a string  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="Vet.String.matches"></a>

#### String.matches(regex) ⇒
Builds a function that checks to see if a value matches a regular expression

**Kind**: static method of <code>[String](#Vet.String)</code>  
**Returns**: a function that takes in a value val, and returns true if it is a string that matches regex  

| Param | Description |
| --- | --- |
| regex | the regular expression to check against |

<a name="Vet.Utils"></a>

### Vet.Utils : <code>object</code>
**Kind**: static namespace of <code>[Vet](#Vet)</code>  

* [.Utils](#Vet.Utils) : <code>object</code>
    * [.accepts(func, validator, message)](#Vet.Utils.accepts) ⇒
    * [.assert(validator, message)](#Vet.Utils.assert) ⇒
    * [.returns(func, validator, message)](#Vet.Utils.returns) ⇒

<a name="Vet.Utils.accepts"></a>

#### Utils.accepts(func, validator, message) ⇒
Wraps a function in a validator which checks its arguments, and throws an error if the arguments are bad.

**Kind**: static method of <code>[Utils](#Vet.Utils)</code>  
**Returns**: a wrapped function that throws an error if the arguments do not pass validation  

| Param | Description |
| --- | --- |
| func | the function to wrap |
| validator | the validator function.  This gets passed the arguments as an array |
| message | an optional message string to pass into the error thrown |

<a name="Vet.Utils.assert"></a>

#### Utils.assert(validator, message) ⇒
Wraps a validator, and throws an error if it returns false.

This is useful for some libraries (like React) that expect
assertion-style validation.

**Kind**: static method of <code>[Utils](#Vet.Utils)</code>  
**Returns**: a function that returns null if the arguments pass validation, or throws an error if they do not  

| Param | Description |
| --- | --- |
| validator | the validator to wrap |
| message | an optional message string to pass into the error |

<a name="Vet.Utils.returns"></a>

#### Utils.returns(func, validator, message) ⇒
Wraps a function in a validator which checks its return value, and throws an error if the return value is bad.

**Kind**: static method of <code>[Utils](#Vet.Utils)</code>  
**Returns**: a wrapped function that throws an error if the return value doed not pass validation  

| Param | Description |
| --- | --- |
| func | the function to wrap |
| validator | the validator function.  This gets passed the return value |
| message | an optional message string to pass into the error thrown |

<a name="Vet.equals"></a>

### Vet.equals(eq) ⇒
Builds an curried equal function

**Kind**: static method of <code>[Vet](#Vet)</code>  
**Returns**: a function that takes in one parameter val, and returns true if val === eq  

| Param | Description |
| --- | --- |
| eq | value to check equality against |

<a name="Vet.exists"></a>

### Vet.exists(val) ⇒
Alias for isNotNullOrUndefined

**Kind**: static method of <code>[Vet](#Vet)</code>  
**Returns**: true if val is not null or undefined  

| Param | Description |
| --- | --- |
| val | value to check |

<a name="Vet.isOneOf"></a>

### Vet.isOneOf(...eq) ⇒
Constructs a function that checks equality against any number of arguments

**Kind**: static method of <code>[Vet](#Vet)</code>  
**Returns**: a function that takes in a parameter val, and returns true if val is NOT equal to any of the options in ...eq  

| Param | Type | Description |
| --- | --- | --- |
| ...eq | <code>\*</code> | values to check equality against |

<a name="Vet.isNotNull"></a>

### Vet.isNotNull(val) ⇒
A function to check for nulls

**Kind**: static method of <code>[Vet](#Vet)</code>  
**Returns**: true if val is strictly not equal to null  

| Param | Description |
| --- | --- |
| val | a value to check against null |

<a name="Vet.isNotNullOrUndefined"></a>

### Vet.isNotNullOrUndefined(val) ⇒
A function to check for null or undefined

**Kind**: static method of <code>[Vet](#Vet)</code>  
**Returns**: true if val is loosely not null (strictly not null or undefined)  

| Param | Description |
| --- | --- |
| val | a value to check against null and undefined |

<a name="Vet.isNotUndefined"></a>

### Vet.isNotUndefined(val) ⇒
A function to check for undefined

**Kind**: static method of <code>[Vet](#Vet)</code>  
**Returns**: true if val is strictly not undefined  

| Param | Description |
| --- | --- |
| val | a value to check |

<a name="Vet.isNull"></a>

### Vet.isNull(val) ⇒
A function to check for null

**Kind**: static method of <code>[Vet](#Vet)</code>  
**Returns**: true if val is strictly null  

| Param | Description |
| --- | --- |
| val | a value to check |

<a name="Vet.isNullOrUndefined"></a>

### Vet.isNullOrUndefined(val) ⇒
A function to check for null or undefined

**Kind**: static method of <code>[Vet](#Vet)</code>  
**Returns**: true if val is loosely null (strictly null or undefined)  

| Param | Description |
| --- | --- |
| val | a value to check |

<a name="Vet.isOneOf"></a>

### Vet.isOneOf(...eq) ⇒
Constructs a function that checks equality against any number of arguments

**Kind**: static method of <code>[Vet](#Vet)</code>  
**Returns**: a function that takes in a parameter val, and returns true if val is equal to any of the options in ...eq  

| Param | Type | Description |
| --- | --- | --- |
| ...eq | <code>\*</code> | values to check equality against |

<a name="Vet.isUndefined"></a>

### Vet.isUndefined(val) ⇒
A function to check for undefined

**Kind**: static method of <code>[Vet](#Vet)</code>  
**Returns**: true if val is strictly undefined  

| Param | Description |
| --- | --- |
| val | a value to check |

<a name="Vet.matchesAllOf"></a>

### Vet.matchesAllOf(...validators) ⇒
A function builder to check a value against multiple validator functions

**Kind**: static method of <code>[Vet](#Vet)</code>  
**Returns**: a function that takes in a value, and returns true if ALL of the validator functions return true  

| Param | Type | Description |
| --- | --- | --- |
| ...validators | <code>function</code> | any number of validator functions |

<a name="Vet.matchesNoneOf"></a>

### Vet.matchesNoneOf(...validators) ⇒
A function builder to check a value against multiple validator functions

**Kind**: static method of <code>[Vet](#Vet)</code>  
**Returns**: a function that takes in a value, and returns true if NONE of the validator functions return true  

| Param | Type | Description |
| --- | --- | --- |
| ...validators | <code>function</code> | any number of validator functions |

<a name="Vet.matchesOneOf"></a>

### Vet.matchesOneOf(...validators) ⇒
A function builder to check a value against multiple validator functions

**Kind**: static method of <code>[Vet](#Vet)</code>  
**Returns**: a function that takes in a value, and returns true if ANY of the validator functions return true  

| Param | Type | Description |
| --- | --- | --- |
| ...validators | <code>function</code> | any number of validator functions |

<a name="Vet.optional"></a>

### Vet.optional(validator) ⇒
A function builder to optionally check a value

**Kind**: static method of <code>[Vet](#Vet)</code>  
**Returns**: a function that takes in a value, and returns true if the value does not exist, or the validator returns true  

| Param | Description |
| --- | --- |
| validator | a validator function |

