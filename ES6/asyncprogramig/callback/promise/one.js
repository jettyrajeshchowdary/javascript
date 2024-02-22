let goToGoa = (success,failure)=>{
    let acc_Bal = 51000;

    acc_Bal > 40000 ? success("Go 2 Goa! Enjoy") 
                    : failure("Go to PG! Sleep!")
}

// goToGoa(()=>{},()=>{})

goToGoa((msg)=>{
    console.log(msg)
},(err)=>{
    console.log(err)
}) 