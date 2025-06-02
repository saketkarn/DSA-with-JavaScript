let no=0, temp=no, digit, pallindrome=0

if(no<0) console.log("false")
else{
  while(temp>0){
    digit=temp%10
    pallindrome=pallindrome*10+digit
    temp=Math.floor(temp/10)
  }
  if(no===pallindrome) console.log(true)
  else console.log(false)
}