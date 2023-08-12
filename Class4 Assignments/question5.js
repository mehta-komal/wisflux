const largestNum = (num1, num2, num3) => {
  let largest = num1;
  if (num1 < num2 && num2 > num3) {
    largest = num2;
    
  } else if(num1<num3)  {
    largest = num3;
  }else{
    largest = num1
  }
  return largest;
};
console.log(largestNum(9, 10, 40));
