let num = 12345;
let reverse = 0;

while(num>0){
    reverse=(reverse*10)+(num%10);
    num=(num/10) - (num%10) / 10;
}
console.log (reverse);