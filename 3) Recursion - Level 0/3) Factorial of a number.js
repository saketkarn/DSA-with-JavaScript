function factorial(n){
  if(n===1) return 1;
  else return (n*factorial(n-1))
}

let n=5;
console.log(factorial(n))