let arr=[1,1,0,1,1,1],count=0,maxCount=0;
for(let i=0;i<arr.length;i++){
  if(arr[i]===1){
    count=count+1;
    maxCount=Math.max(count, maxCount)
  }
  else{
    count=0
  }
}
console.log(maxCount)