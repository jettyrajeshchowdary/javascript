class Account{
    acc_Id=101;
    acc_Name='sunil rajesh shanbor'
    acc_Bal = 50000 

    open_Account(){
        console.log("Account Opened Successfully!")
    }
    deposit_Amount(){
        console.log("Amount Deposited Successfully")
    }
    withdrawl(){
        console.log("Insuffienet Bal")
    }
    get_Bal(){
        console.log("Server Busy")
    }
    close_Account(){
        console.log("Bal is minus! Please deposit more funds")
    }

}


let a1= new Account()
a1.open_Account()
a1.deposit_Amount()
a1.withdrawl()
a1.get_Bal()
a1.close_Account()
