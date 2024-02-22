let employees=[ {id:101,name:"Rahul",sal:45000},
                {id:102,name:"Sonia",sal:55000}
                ]

let createEmployee=(emp)=>{
    
    setTimeout(()=>{
        employees.push(emp)
    },4000)
}

let getEmployees=()=>{
    setTimeout(()=>{
        let rows=""
        for(employee of employees){
            rows = rows +`<tr>
                            <td>${employee.id}</td>
                            <td>${employee.name}</td>
                            <td>${employee.sal}</td>
                           </tr>`
        }
        document.getElementById("abc").innerHTML  = rows
    },2000)
}
createEmployee({id:103,name:"Priyanka",sal:65000})
getEmployees()