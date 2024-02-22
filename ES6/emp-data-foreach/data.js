let employees=[{id:101,name:"Rahul",sal:45000},
{id:102,name:"Sonia",sal:55000},
{id:103,name:"Priyanka",sal:65000},
{id:104,name:"Modi",sal:75000},
{id:105,name:"Rajesh",sal:185000},
{id:106,name:"Tarun",sal:35000},
]

function display_Data(){
    let rows=""
    employees.forEach((employee)=>{
        rows=rows+`<tr>
                            <td> ${employee.id} </td>
                            <td> ${employee.name} </td>
                            <td> ${employee.sal} </td>
        
                       </tr>`
    })

    document.getElementById('abc').innerHTML =rows;
    //document.getElementById('abc').innerHTML ="GM";
}