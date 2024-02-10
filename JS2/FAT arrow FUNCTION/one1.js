//fat arrow fn-alternative synatx for the function but doest contain functio,fn name,and return statements also,
//syntax: ()=>{}

//normal function
/* function add(a,b){
    console.log(a+b)
}
add(10,20) */

/* let add=(a,b)=>{
    console.log(a+b)

}
add(10,20) */
/* 
let add=()=>{
    return("addition")
 
}
add()
console.log(add()) */
//------------------------------------------------
/* 
function add(a,b){
    console.log(a+b)
}
add(10,20) */

/* let add=(a,b)=>{
    console.log(a+b)
}
add(10,1) */
//------------------------------------------------
/* function add(a,b){
  return a+b
}
let r1=add(20,15)
console.log(r1) */
/* 
let add=(a,b)=>{
   return a+b
}
let r1= (20,3)
console.log(r1) */
//------------------------------------------
/* let add=(a,b)=>a+b;

let r1=add(10,10)
console.log(r1) */

//-------------------------------------

/* function wish(name){
    return  "hi "+name + "! , "  + "GM" 
}

console.log(wish("lakshmi")) */
/* 
let wish =name=>"hi"+name+"good morning"

console.log(wish("lakshmi"))
 */
/* function test(){
    console.log(this) this gives heavy object context
} */

/* let test = ()=>{
    console.log(this)  this gives empty object
}
test() */

//-----------------------------------------------------------------------
//function overriding conflicts are resolved by fat arrow function

/*  function wish(){
    console.log("gm")
}
wish()   */           // here function overides /hoisting is done bcz there is same function an function name
/* 
function wish(){
    console.log("gn")
}
wish()  */

var wish=()=>{
    console.log("gm")
}
wish()   //here function overriding conflicts are resolved by fat arrow function

var wish=()=>{
    console.log("gn")
}
wish() 