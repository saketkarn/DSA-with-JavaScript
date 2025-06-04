let arr=[2,4,1],min=arr[0],profit=0
for(let i=1;i<arr.length;i++){
  if(arr[i]<min){
    min=arr[i]
  }
  else if(arr[i]>min && (arr[i]-min)>profit){
    profit=arr[i]-min
  }
}
console.log(profit)