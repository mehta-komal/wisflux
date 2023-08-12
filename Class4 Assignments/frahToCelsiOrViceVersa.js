const FahrenheitToCelsius = (f)=>{
    const celsius = Math.floor((f-32)*(5/9));
    return celsius;
}

const celsiusToFahrenheit = (c) =>{
    const  fahrenheit = Math.floor((c*9/5)+32);
    return fahrenheit;
}

console.log(FahrenheitToCelsius(80));
console.log(celsiusToFahrenheit(0));
