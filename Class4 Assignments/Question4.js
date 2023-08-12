const calculateDifference = (num)=>{
    const absoluteDifference = Math.abs(num - 13);

    if(num>13){
        return 2*absoluteDifference;
    }else{
        return absoluteDifference;
    }
}

console.log(calculateDifference(5));