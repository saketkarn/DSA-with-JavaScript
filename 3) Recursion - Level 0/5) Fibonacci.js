function fib(n){
    if(n<=1) return n;
    return (fib(n-1)+fib(n-2))
}

let n=4;
console.log(fib(n))