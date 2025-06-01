let no=-123,x=Math.abs(no),rev=0;

while(x>0){
  let digit=x%10
  rev=rev*10+digit
  x=Math.floor(x/10)
}

if(no>0) console.log(rev)
else if(no<0) console.log(-rev)