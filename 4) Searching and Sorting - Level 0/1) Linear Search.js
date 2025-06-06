function linearSearch(i,el){
  if(i===arr.length) return false
  else if(arr[i]===el) return true
  else return linearSearch(i+1,el)
}

let arr=[1,2,3,4,5],el=7,i=0;
console.log(linearSearch(i,el))