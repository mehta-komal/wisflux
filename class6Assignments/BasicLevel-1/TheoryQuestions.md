## What is JavaScript?

JavaScript is a versatile programming language which is used to  add  interactivity and dynamic behaviour  to web applications. It is high-level, interpreted scripting language that runs in web browsers and allowing developers to manipulate web page content and handel user interactions, and create dynamic web applications


## What is difference between let and var?

* **'var'** is function-scoped, it means it is only accessible within the enitre function it is declared in.

* **'let'**  is blocked-scoped, it means it's limited in scope to the block, statement, or expression where it's declared.

* Variable decalred with **'var'** are hoisted to the top of their function or global context, while variables declared with **'let'** are not hoisted.

* Variable decalred by **'let'** cannot be redeclared and must be decalred before use whereas variables decalred with **'var'** keyword are hoisted.

## Whay do we prefer  Const  over var?

* **'Const'**  variable is a block-scoped but **'Var'** is function-scoped.  
* **'Const'** is used for variables that should not be reassigned after their inital assignment. So using **'Const'** helps to prevent accidental reassignments, improving code predictability and maintainability.

## What is the use of javascript in web browsers?

Javascript is used to enhance the user experience of web pages. It allows us to make interactive features like form validation, animations, dynamic content loading, and real time updates without requiring page reloads.
JavaScript allows developers to manipulate and modify the DOM of web pages, altering their structure and appearance.



## What are objects?
In javascript, an object is a composite data type that can hold properties and methods.
Properties are key value pairs that store data, and methods are functions associated with the object.
Objects are fundamental builing block in javascript.


## What is an array and how is it differnt from an object in javascript?

* Arrays are ordered lists of values, indexed by integers, and have a numerical length property. They are suitable for collections of similar items.

* Objects are collections of key-value pairs, where keys are strings and values can be of any data type.


## What is a function?

A function is a reusable block of code that performs a specific task or calculates a value. Functions in javascript can accept arguments, execute statements, and return values.

## How can we implement call by value and call by reference in javascript?

Javascript uses call by value for primitive data types like numbers and strings and call by reference for objects including arrays and functions.

When you pass a primitive to a function, a copy is made. When you pass an objects, a reference to the object is passed, allowing modifications to affect the original object.

## What are primitive data types in javascript?

JavaScipt has six primitive data types:
* undefined
* null
* boolean
* number
* stirng
* symbol

## What is DOM?

The DOM is a programming interface provided by browers that represents the structure of a web page as a tree of objects. Each object corresponds to an element in the HTML document. Developers use the DOM to manipulate and interact with web page content dynamically using Javascript.

## Why do we need DOM?

The DOM allows web developers to access and modify HTML and CSS content of a webpage.
It add, update or remove elements from the page without requiring a full page relaod. It respond to user interactions by updating the webpage content in real-time. It create interactive and dynamic web applications b manipulating the structure and style of the webpage.