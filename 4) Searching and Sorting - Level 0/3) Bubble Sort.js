let arr=[5,2,4,3],n=arr.length-1;
while(n>=1){
    for(let i=0;i<=n;i++){
        if(arr[i]>arr[i+1]){
            [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
        }
    }
    n--
}
console.log(arr)