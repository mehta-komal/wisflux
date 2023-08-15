## Why use function in javascript?

Functions in javascript are used to encapsulate code into reuseable blocks, promoting modularity and maintainablility in codebases.

## What is function Invocation?
Function invocation refers to the process of calling a function to execute its code. It's achieved by using the function's name followed by parentheses containg any necessary arguments.

## Does a function behave like an object in javascript? Prove it by an example.
Functions are objects in javascript. They have properties and methods just like any other object.
Example:

```javascript
function greet(name){
    console.log(`hello, ${name}`);
}

greet.message = "welcome to the program";
console.log(greet.message);

```

## What are events in javascript?

Events in javascript refer to interactions or occurrences that trigger a response. Examples include clicks, form submission and keyboard inputs.

## What is a String?

A string is a sequence of characters enclosed within single or double quotes. It represents textual data and can contain letters, numbers, symbols, and spaces.

## What is an Array? Is It static or dynamic in javascript?

An array is an ordered collection of values, which can be of any data type. In javascript, arrays are dynamic, ,eaning their size can change dynamically by adding or removing elements.

## Difference Between Map and Set?

**'Map'**: Stores key-value pairs, where keys can be of any data type. Maintains the order of insertion.

**'Set'**: Stores unique values of any data type. Doesn't allow duplicate values.

## Difference Between Array and Map?

**'Array'**: Stores values in a sequentially indexed manner. Can contain dublicates.

**'Map'**: Stores key-value pairs, where keys can be of any data type. No dublicate keys are allowed.

## What are array methods? List a few names?

Array methods are built-in functions that can be called on arrays to perform various operations. Examples: **push, pop, shift, unshift, concat, join, slice, splice**.

## In how many ways can we traverse through an array in javascript?

* Using a **for** loop
* Using the **forEach** method
* Using the **for...of** loop
* Using the **map** method
* Using the **filter** method
* Using the **reduce** method
* Using the **some** and **every** methods
* Using the **while loop** with an index.

