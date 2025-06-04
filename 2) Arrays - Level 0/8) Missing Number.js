let arr=[0,1]
let n=arr.length
let totalSum=(n*(n+1))/2,sum=0;
for(let i=0;i<n;i++){
    sum=sum+arr[i]
}
let result=totalSum-sum;
console.log(result)