let arr=["H","a","n","n","a","h"];
for(let i=0;i<Math.floor(arr.length/2);i++){
  [arr[i],arr[arr.length-i-1]]=[arr[arr.length-i-1],arr[i]]
}
console.log(arr)