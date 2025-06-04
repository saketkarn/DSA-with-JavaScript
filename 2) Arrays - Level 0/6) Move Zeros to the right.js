let arr=[0,1,0,3,12],i=0,k=0;
while(i<arr.length){
  if(arr[i]!==0){
    [arr[i],arr[k]]=[arr[k],arr[i]]
    k++
  }
  i++
}
console.log(arr)