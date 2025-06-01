function findEvenNumber(arr){
  let i=0;
  while(i<arr.length){
    if(arr[i]%2===0){
      console.log(arr[i])
    }
    i++
  }
}

let arr=[1,2,3,4,5,6,7]
findEvenNumber(arr)
