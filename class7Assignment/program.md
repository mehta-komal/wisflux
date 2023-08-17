## Write a function that generates a random number between two ranges, -100 to 0 and 800 - 900.

```javascript
function randomInTwoRange(min1, max1, min2, max2) {
  const range1 = max1 - min1 + 1;
  const range2 = max2 - min2 + 1;

  const random1 = Math.floor(Math.random() * range1) + min1;
  const random2 = Math.floor(Math.random() * range2) + min2;

  return Math.random() < 0.5 ? random1 : random2;
}

// Example usage
const randomNumber = randomInTwoRange(-100, 0, 800, 900);
console.log(randomNumber);

```