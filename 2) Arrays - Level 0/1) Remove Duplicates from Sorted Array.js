let arr=[0,0,1,1,1,2,2,3,3,4]
let k=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>arr[k]){
        arr[k+1]=arr[i]
        k++
    }
}
console.log(k+1)