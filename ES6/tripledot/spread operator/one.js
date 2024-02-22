//spread operator(acts as spread(for array) and rest(for function))

//spreadoperator:defined as extracts array element  and copying to new array

// example

let eIds=[101,102,103,104]
//creating new array based on existing
/* 
let new_ids=[]

for( eid of eIds){
 new_ids.push(eid)

} 
console.log(new_ids) */

//using spread operator

let new_ids=[...eIds]
console.log(new_ids)