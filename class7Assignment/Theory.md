## What is anonymous functions in JavaScript?

Anonymous functions are functions without a name. They are often used for immediate invocation or as arguments to higher-order functions.

## Explain strict comparison and Abstract comparison in javascript?

* **Strict Comparison ('===')** Compares both value and data type. Returns true if they are equal.

* **Abstract Comparison ('==')** Converts operands to the same type before comparison. May result in unexpected behaviour due to type coercion.

## Difference b/w arrow functions and regular functions?

* Arrow functions have concise syntax and retain the **'this'** value of the enclosing scope. They can't be used as constructors.

* Regular function have a more flexible syntax, their own **'this'** value, and can be used as constructors.

## What is Hoisting in JavaScript?

Hoisting is a behavior where variable and function declarations are moved to top of their containing scope during compilation.

## JavaScript is a garbage collected programming language, explain how?
JavaScript's garbage collector automatically reclaims memory used by objects that are no longer  reachable, thus preventing memory leaks.

## Explain Shallow copy vs Deep copy in javascript?
* Shallow copy duplicated the outer structure of an object but maintains references to the same nested objects.

* Deep Copy duplicates both the outer structure and the nested objects, creating entirely new objects.

## What is Object.freeze?

**'Object.freeze'** is a method that prevents modifications to an object's properties, making it effectively immutable.

