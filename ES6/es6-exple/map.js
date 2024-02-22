let ids=[101,102,103,104]
//creating new array on the basis of existing array
/* 
let new_Ids=[]
for(id of ids){
    new_Ids.push(id)
}

console.log(ids)
console.log(new_Ids) */
 
//using map() >> iterates array and executes the provided function

let new_Ids=ids.map((id)=>{
    return id
})
console.log(ids)
console.log(new_Ids)
//we should use map() while creating new array