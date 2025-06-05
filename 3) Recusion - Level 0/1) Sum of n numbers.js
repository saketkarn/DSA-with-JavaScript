function totalSum(i){
    if(i===0) return arr[0];
    return arr[i] + totalSum(i-1)
}

let arr=[1,2,3,4,5],i=arr.length-1;
console.log(totalSum(i))