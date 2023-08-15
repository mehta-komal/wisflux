# Average of array nums in javascript?

```javaScript
const nums = [10, 20, 30 ,40, 50];

const sum = nums.reduce((acc, num) =>acc+num, 0);
const average = sum/nums.length;

console.log(`Average: ${average}`);
```

# Swap two numbers by reference?

```javaScript
const swapNumber = (a, b)=>{
[a, b] = [b, a];
return [a, b];
}

let num1 = 30;
let num2 = 40;

[num1, num2] = swapNumber(num1, num2);
console.log(`num1: ${num1} and num2: ${num2}`);
```

# Print the fibonacci sequence?

```javaScript
const fibonacciSeq = (num)=>{
let a = 0;
let b = 1;
let c = 0;
for(let i = 0; i <= num; i++){
     c = a+b;
     console.log(a);
     a = b;
     b = c;

}

}
fibonacciSeq(10);
```
# Sort an array by both ascending and decending order?

```javascript
const array  = [2, 3, 4, 6, 1]
    const ascendingOrder = array.sort();
    
    const descendingOrder = array.sort((a, b)=> b-a);

    console.log(ascendingOrder);
    console.log(descendingOrder);

```

# Show a variable value in an HTML webpage using DOM?

### HTML
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Variable Value Display</title>
</head>
<body>
  <p id="result"></p>
  <script src="script.js"></script>
</body>
</html>

```
 ### javaScript
```javascript
const variableValue = 2;
cosnt resultEle = document.getElementById("#result);

resultEle.textContent = `variable Value: ${variableValue}`;

```