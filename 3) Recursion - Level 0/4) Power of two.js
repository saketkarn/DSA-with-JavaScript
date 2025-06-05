function power(n){
    if(n===1) return true;
    else if(n%2===1) return false;
    else return power(n/2)
}

let n=16;
console.log(power(n))