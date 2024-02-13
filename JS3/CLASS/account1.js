class Account{
    acc_Id = 101
    acc_Name = "Rajesh sunil shanbor siri sruthi nayana"
    acc_Bal = 50000

    open_Account(){
        console.log("Account Opened Successfully")
    }

    deposit_Amount(){
        console.log("Amount Deposited Succesfully")
    }

    withdrawal(){
        console.log("Insufficient Balance")
    }

    get_Bal(){
        console.log("Server Busy")
    }

    close_Account(){
        console.log("Account Closed")
    }
}

let a1 = new Account()

console.log(a1)
a1.open_Account()
a1.deposit_Amount()
a1.withdrawal()
a1.get_Bal()
a1.close_Account()