//FOR ARRAYS

//to extract array elements and copy into new array

/* let ids=[101,102,104,105]
let new_ids=[...ids]

console.log(new_ids) */

//to merge array elements
/* 
let id=[101,102,103]
let ids=[104,105,106]

let new_ids=[...id,...ids]           note: duplicates are allowed
console.log(new_ids)
 */

//to extend arrays

/* let num=[101,102,103]
let new_num=[...num,104,105,106]

console.log(new_num) */

//FOR OBJECTS
 
// to extract object values and copy into new objects

/* let emp={
    id:101,
    name:"sunil",
    email:"sunil@gmail.com"
}

let new_emp={...emp}

console.log(new_emp) */

//without spread
/* 
let emp={
    id:101,
    name:"sunil",
    email:"sunil@gmail.com"
}
let new_Emp={}
for(prop in emp){
new_Emp[prop] = emp[prop]
}
console.log(new_Emp)
 */

//to merge two objects

/* let user={
    id:101,
    name:"sandhya",
    designation:"developer",
    email:"sandhya@gmail.com",
}
let user_details={
    email:"sandhya1@gmail.com",
    salary:45000,
    location:"banglore",

}

let new_employee={...user,...user_details}

console.log(new_employee) */

//to extend objects
/* 
let user={
    id:102,
    name:"sunil",
    role:"data engineer",
}
let user_details={
    ...user,
    salary:60000,
    location:"banglore"
}

console.log(user_details) */