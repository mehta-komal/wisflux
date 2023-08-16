## Write code implementations of arr methods -
a. forEach
b. map
c. filter
d. reduce
e. includes
f. some
g. every



```javascript
// forEach
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num));
```

```javascript
//map
const doubleNumbers = numbers.map(num=>num*2);
console.log(doubleNumbers);
```


```javascript
//filter
const evenNumbers = numbers.filter(num=>num%2===0);
console.log(evenNumbers);
```


```javascript
//reduce
const sum = numbers.reduce((acc, num)=>acc+num, 0);
console.log(sum);
```


```javascript
//includes
const hasThree = numbers.includes(3);
console.log(hasThree);
```

```javascript
//some
const hasEven=numbers.some(num=>num%2===0);
console.log(hasEven);
```

```javascript
//every
cosnt allPositive = numbers.every(num=>num>0);
console.log(allPositive);

```


## Simple array implementation
```javascript
const fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); 
// Output: apple

fruits.push("grape");
console.log(fruits); 
// Output: ["apple", "banana", "orange", "grape"]

fruits.pop();
console.log(fruits); 
// Output: ["apple", "banana", "orange"]
```

## To do list task
/* you have to arrays
1. ToDo
2. Completed
! implement three functions
1. add(title)
2. remove(id)
3. update(id, title)
4. markAsCompleted(id)
* The ToDo array is a list of tasks (object)
each task has an id (number) and a title (string)
* eg :
{id: 1, task: 'Learn JavaScript'}
Implementation
1. add function will add a task to the ToDO array with an unique
id
- it will accept a title as a string and return the id of the
new task
- it will return -1 if the title is empty
2. remove function will remove a task from the TODO array
- it will accept an id as a number and return true if the
task was removed
- it will return false if the id is not found
3. update function will update the title of a task
- it will accept an id as a number and a title as a string
- it will return true if the task was updated
- it will return false if the id is not found
4. markAsCompleted will remove a task from the TODO array and add
it to the Completed array
- it will accept an id as a number and return true if the
task has been moved
- it will return false if the id is not found

```javascript
const ToDo = [];
const Completed = [];

function add(title) {
  if (!title) return -1;
  const id = ToDo.length + 1;
  ToDo.push({ id, title });
  return id;
}

function remove(id) {
  const index = ToDo.findIndex(task => task.id === id);
  if (index !== -1) {
    ToDo.splice(index, 1);
    return true;
  }
  return false;
}

function update(id, title) {
  const task = ToDo.find(task => task.id === id);
  if (task) {
    task.title = title;
    return true;
  }
  return false;
}

function markAsCompleted(id) {
  const index = ToDo.findIndex(task => task.id === id);
  if (index !== -1) {
    const task = ToDo.splice(index, 1)[0];
    Completed.push(task);
    return true;
  }
  return false;
}

add("Learn JavaScript");
add("Practice Coding");
console.log(ToDo); 
// Output: [{ id: 1, title: 'Learn JavaScript' }, { id: 2, title: 'Practice Coding' }]
console.log(remove(1)); 
// Output: true
console.log(ToDo); 
// Output: [{ id: 2, title: 'Practice Coding' }]
console.log(update(2, "Coding Challenges")); // Output: true
console.log(ToDo); 
// Output: [{ id: 2, title: 'Coding Challenges' }]
console.log(markAsCompleted(2)); 
// Output: true
console.log(ToDo); 
// Output: []
console.log(Completed); 
// Output: [{ id: 2, title: 'Coding Challenges' }]

```