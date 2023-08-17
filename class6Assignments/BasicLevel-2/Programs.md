## Reverse an array? input:[1, 2, 3, 4, 5, 6]

```javascript
const array = [1, 2, 3, 4, 5, 6];
const reverseArray = array.reverse();

console.log(reverseArray);
```

## Explain the properties of the join array method function via program?

The **join** method in javascript converts all the elements of an array into a string and concatenates them using a specified separator.

```javascript
const fruits = ['apple', 'banana', 'mango'];
const joinedString = fruits.join(", ");

console.log(joinedString);
```

## Show all the values of an array in a html webpage using DOM and forEach method?

Assuming you have an HTML element with an id "result" to display the values are:

```javascript
const values = [10, 20, 30 ,40 ,50];

values.forEach(value =>{
    const valueId = document.createElement('p');
    valueId.textContent = value;
    resuleEle.appendChild(valueId);
});
```


## Merge to sets in javascript? (hint use Set class in javascript)

```javascript
const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 4, 5]);

const mergedSet = new Set([...set1, ...set2]);

console.log(mergedSet);

```