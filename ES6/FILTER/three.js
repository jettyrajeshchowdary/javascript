let employees=["sunil","sonia","priyanka"]

let new_employees=employees.filter(function(emp_name){
      return emp_name.length>6
})
console.log(new_employees) 