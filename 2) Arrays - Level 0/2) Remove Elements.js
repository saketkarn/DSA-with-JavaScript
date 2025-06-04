let arr=[0,1,2,2,3,0,4,2],k=0,val=2;
for(let i=0;i<arr.length;i++){
  if(arr[i]!==val){
    arr[k]=arr[i]
    k++
  }
}
console.log(k)