
const areaOfTriangle = (length, height, base) => {
  let s = (length + height + base) / 2;
  const area = Math.sqrt(s*((s - length) * (s - height) * (s - base)));
  return area 
};

console.log(areaOfTriangle(5, 6, 7));
