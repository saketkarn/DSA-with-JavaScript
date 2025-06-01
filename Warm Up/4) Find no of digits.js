let no=259,count=0
if(no===0) count=1
no=Math.abs(no)
while(no>0){
  no=Math.floor(no/10)
  count++
}
console.log(count)