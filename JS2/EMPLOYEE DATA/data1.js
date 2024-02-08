let employees=[{id:101,name:"sunil",sal:45000},
{id:102,name:"Shanbor",sal:55000},
{id:103,name:"nayana",sal:65000},
{id:104,name:"sri",sal:75000},
{id:105,name:"sruthi",sal:185000},]

function display_Data(){
    let rows=""
    for(emp of employees){
            rows = rows + ` <tr>
                                <td>${emp.id}</td>
                                <td>${emp.name}</td>
                                <td>${emp.sal}</td>

                             </tr>`
    }
   

    document.getElementById('abc').innerHTML =rows;
    //document.getElementById('abc').innerHTML ="GM";
}