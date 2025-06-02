function findMaxElement(arr){
  let i=0,max=-Infinity;
  while(i<arr.length){
    if(arr[i]>max){
      max=arr[i]
    }
    i++
  }
  return max
}

let arr=[1,2,3,4,5,6,7]
let result=findMaxElement(arr)
console.log(result)