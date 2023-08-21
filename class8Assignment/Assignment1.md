## What are the basic data types in TypeScript?
TypeScript has several basic data types:
**'number'**: Represent numeric values.
**'string'**: Represent textual values.
**'boolean'**: Represent true or false values.
**'null' and 'undefined'**: Represent absence of a values.
**'any'**: Represent any type, similar to javascript.
**'void**: Represent the absence of a value, often used in function return types.

##  What is Generic data type.
Generics in typescript allow you to create reuseable components that can work with different data types while maintaining type safety. They are like placeholders for types.

##  What is type inferring in TS.
Type inference is a feature in typescript where the compiler automatically deduces the type of a variable or expression based on its value and context. This help reduce the need for explicit type annotations and makes the code cleaner.

## What are the possible ways to define typing for functions.
There are a few ways to define types for functions in TypeScript:
**Parameter Types and Return Type**
```typescript
function add(a: number, b: number): number{
    return a+b;
}
```
**Function Types**:
```typescript
type Mathoperation = (a: number, b: number)=> number;
const multiply: Mathoperation = (x, y)=> x*y;
```
**Interface for function Types**:
```typescript
interface Mathoperation{
    (a: number, b: number):number;
    const add:Mathoperation=(x, y)=>x+y;
}
```

## Program
Define the types in typescript for the given following JavaScript code.
Todo:
- Define type/interface for a single Todo object.
- Define type for each function.
- Do not use `any` (TS Data Type) type of typescript.


```typescript
interface Todo {
name:stirng;
description: stirng;
done: boolean;
}


var todos: Todo[] = [];

function add(name: stirng, description: string): number{
    return todos.push({
        name:name,
        description:description;
        done:false
    });
}
function remove(index: number): Todo[] {
    return todos.splice(index, 1);

}

function list(): void{
    todos.forEach(function(todo, index){
        console.log(index+" -"+ todo.name);
    })
}

function update(index: number, name: string, description: string): Todo {
  todos[index].name = name;
  todos[index].description = description;
  return todos[index];
}

```
