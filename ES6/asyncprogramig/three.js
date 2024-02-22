/* let calc=(a,b,op)=>{
    if(op==="sum"){
        return a+b
    }
    if(op==="multi"){
        return a*b
    }
}
let r1=calc(10,20,"sum")
console.log(r1)
let r2=calc(10,20,"multi")
console.log(r2) */


//using call back()
let sum=(a,b)=>{
    return a+b
}
let multi=(a,b)=>{
    return a*b 
}
let calc=(a,b,callback)=>{
    return callback(a,b)
}
let r1= calc(10,20,sum)
let r2= calc(10,20,multi)
console.log(r1)
console.log(r2)