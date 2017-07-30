!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.Vet=r():t.Vet=r()}(this,function(){return function(t){function r(e){if(n[e])return n[e].exports;var o=n[e]={exports:{},id:e,loaded:!1};return t[e].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var n={};return r.m=t,r.c=n,r.p="",r(0)}([function(t,r,n){t.exports=n(1)},function(t,r,n){"use strict";var e=Object.assign({},n(2),{Boolean:n(17),Number:n(23),String:n(30),Function:n(40),Array:n(42),Object:n(46),Utils:n(50)});e.isArray=e.Array.isArray,e.isBoolean=e.Boolean.isBoolean,e.isFunction=e.Function.isFunction,e.isNumber=e.Number.isNumber,e.isObject=e.Object.isObject,e.isString=e.String.isString,e.assert=e.Utils.assert,e.array=e.Array,e.boolean=e.Boolean,e.function=e.Function,e.number=e.Number,e.object=e.Object,e.string=e.String,e.utils=e.Utils,t.exports=e},function(t,r,n){"use strict";t.exports={equals:n(3),exists:n(4),isNoneOf:n(5),isNotNull:n(6),isNotNullOrUndefined:n(7),isNotUndefined:n(8),isNull:n(9),isNullOrUndefined:n(10),isOneOf:n(11),isUndefined:n(12),matchesAllOf:n(13),matchesNoneOf:n(14),matchesOneOf:n(15),optional:n(16)}},function(t,r){"use strict";var n=function(t){return function(r){return r===t}};t.exports=n},function(t,r){"use strict";var n=function(t){return null!=t};t.exports=n},function(t,r){"use strict";var n=function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return function(t){var n=!0,e=!1,o=void 0;try{for(var i,u=r[Symbol.iterator]();!(n=(i=u.next()).done);n=!0){var s=i.value;if(t===s)return!1}}catch(t){e=!0,o=t}finally{try{!n&&u.return&&u.return()}finally{if(e)throw o}}return!0}};t.exports=n},function(t,r){"use strict";var n=function(t){return null!==t};t.exports=n},function(t,r){"use strict";var n=function(t){return null!=t};t.exports=n},function(t,r){"use strict";var n=function(t){return void 0!==t};t.exports=n},function(t,r){"use strict";var n=function(t){return null===t};t.exports=n},function(t,r){"use strict";var n=function(t){return null==t};t.exports=n},function(t,r){"use strict";var n=function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return function(t){var n=!0,e=!1,o=void 0;try{for(var i,u=r[Symbol.iterator]();!(n=(i=u.next()).done);n=!0){var s=i.value;if(t===s)return!0}}catch(t){e=!0,o=t}finally{try{!n&&u.return&&u.return()}finally{if(e)throw o}}return!1}};t.exports=n},function(t,r){"use strict";var n=function(t){return void 0===t};t.exports=n},function(t,r){"use strict";var n=function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return function(t){var n=!0,e=!1,o=void 0;try{for(var i,u=r[Symbol.iterator]();!(n=(i=u.next()).done);n=!0){var s=i.value;if(!s(t))return!1}}catch(t){e=!0,o=t}finally{try{!n&&u.return&&u.return()}finally{if(e)throw o}}return!0}};t.exports=n},function(t,r){"use strict";var n=function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return function(t){var n=!0,e=!1,o=void 0;try{for(var i,u=r[Symbol.iterator]();!(n=(i=u.next()).done);n=!0){var s=i.value;if(s(t))return!1}}catch(t){e=!0,o=t}finally{try{!n&&u.return&&u.return()}finally{if(e)throw o}}return!0}};t.exports=n},function(t,r){"use strict";var n=function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return function(t){var n=!0,e=!1,o=void 0;try{for(var i,u=r[Symbol.iterator]();!(n=(i=u.next()).done);n=!0){var s=i.value;if(s(t))return!0}}catch(t){e=!0,o=t}finally{try{!n&&u.return&&u.return()}finally{if(e)throw o}}return!1}};t.exports=n},function(t,r){"use strict";var n=function(t){return function(r){return null==r||t(r)}};t.exports=n},function(t,r,n){"use strict";t.exports={isBoolean:n(18),isFalse:n(19),isFalsy:n(20),isTrue:n(21),isTruthy:n(22)}},function(t,r){"use strict";var n=function(t){return"boolean"==typeof t||t instanceof Boolean};t.exports=n},function(t,r){"use strict";var n=function(t){return t===!1};t.exports=n},function(t,r){"use strict";var n=function(t){return!t};t.exports=n},function(t,r){"use strict";var n=function(t){return t===!0};t.exports=n},function(t,r){"use strict";var n=function(t){return!!t};t.exports=n},function(t,r,n){"use strict";t.exports={isInteger:n(24),isNegative:n(26),isNonZero:n(27),isNumber:n(25),isPositive:n(28),isZero:n(29)}},function(t,r,n){"use strict";var e=n(25),o=Number.isInteger||function(t){return e(t)&&isFinite(t)&&Math.floor(t)===t};t.exports=o},function(t,r){"use strict";var n=function(t){return"number"==typeof t||t instanceof Number};t.exports=n},function(t,r,n){"use strict";var e=n(25),o=function(t){return e(t)&&t<0};t.exports=o},function(t,r,n){"use strict";var e=n(25),o=function(t){return e(t)&&0!==t};t.exports=o},function(t,r,n){"use strict";var e=n(25),o=function(t){return e(t)&&t>0};t.exports=o},function(t,r,n){"use strict";var e=n(25),o=function(t){return e(t)&&0===t};t.exports=o},function(t,r,n){"use strict";t.exports={isEmpty:n(31),isLength:n(32),isNotEmpty:n(34),isProbablyBase64:n(35),isProbablyDataURL:n(36),isProbablyEmail:n(37),isProbablyURL:n(38),isString:n(33),matches:n(39)}},function(t,r){"use strict";var n=function(t){return""===t};t.exports=n},function(t,r,n){"use strict";var e=n(33),o=function(t){return function(r){return e(r)&&r.length===t}};t.exports=o},function(t,r){"use strict";var n=function(t){return"string"==typeof t||t instanceof String};t.exports=n},function(t,r,n){"use strict";var e=n(33),o=function(t){return e(t)&&""!==t};t.exports=o},function(t,r,n){"use strict";var e=n(33),o=/^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/g,i=function(t){return o.lastIndex=0,e(t)&&o.test(t)};t.exports=i},function(t,r){"use strict";var n=/^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/gi,e=function(t){return n.lastIndex=0,n.test(t)};t.exports=e},function(t,r,n){"use strict";var e=n(33),o=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,i=function(t){return o.lastIndex=0,e(t)&&o.test(t)};t.exports=i},function(t,r){"use strict";var n=/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&\/\/=]*)$/g,e=function(t){return n.lastIndex=0,n.test(t)};t.exports=e},function(t,r,n){"use strict";var e=n(33),o=function(t){return function(r){return t.lastIndex=0,e(r)&&t.test(r)}};t.exports=o},function(t,r,n){"use strict";t.exports={isFunction:n(41)}},function(t,r){"use strict";var n=function(t){return"function"==typeof t};t.exports=n},function(t,r,n){"use strict";t.exports={isArray:n(43),isArrayOf:n(44),isLength:n(45)}},function(t,r){"use strict";var n=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};t.exports=n},function(t,r){"use strict";var n=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},e=function(t){return function(r){if(!n(r))return!1;var e=!0,o=!1,i=void 0;try{for(var u,s=r[Symbol.iterator]();!(e=(u=s.next()).done);e=!0){var c=u.value;if(!t(c))return!1}}catch(t){o=!0,i=t}finally{try{!e&&s.return&&s.return()}finally{if(o)throw i}}return!0}};t.exports=e},function(t,r){"use strict";var n=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},e=function(t){return function(r){return n(r)&&r.length===t}};t.exports=e},function(t,r,n){"use strict";t.exports={isObject:n(47),matches:n(48),matchesExact:n(49)}},function(t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e=function(t){return null!==t&&("function"==typeof t||"object"===("undefined"==typeof t?"undefined":n(t)))};t.exports=e},function(t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e=function(t){return"function"==typeof t},o=function(t){return null!==t&&("function"==typeof t||"object"===("undefined"==typeof t?"undefined":n(t)))},i=function t(r,n){if(e(r))return r(n);if(o(r)){if(!o(n))return!1;for(var i in r){var u=r[i],s=n[i];if(!t(u,s))return!1}return!0}return n===r},u=function(t){return function(r){return i(t,r)}};t.exports=u},function(t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e=function(t){return"function"==typeof t},o=function(t){return null!==t&&("function"==typeof t||"object"===("undefined"==typeof t?"undefined":n(t)))},i=function t(r,n){if(e(r))return r(n);if(o(r)){if(!o(n))return!1;for(var i in r){var u=r[i],s=n[i];if(!t(u,s))return!1}for(var c in n){var f=r[c],a=n[c];if(!t(f,a))return!1}return!0}return n===r},u=function(t){return function(r){return i(t,r)}};t.exports=u},function(t,r,n){"use strict";t.exports={accepts:n(51),assert:n(52),returns:n(53)}},function(t,r){"use strict";var n=function(t,r,n){return function(){for(var e=arguments.length,o=Array(e),i=0;i<e;i++)o[i]=arguments[i];if(r(o))return t.apply(void 0,o);throw new Error(n||"Vet.utils.accepts error!")}};t.exports=n},function(t,r){"use strict";var n=function(t,r){return function(){if(!t.apply(void 0,arguments))throw new Error(r||"Vet assertion error!")}};t.exports=n},function(t,r){"use strict";var n=function(t,r,n){return function(){var e=t.apply(void 0,arguments);if(r(e))return e;throw new Error(n||"Vet.utils.returns error!")}};t.exports=n}])});