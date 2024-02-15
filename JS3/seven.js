class Account{
    acc_Bal=0;

    deposit_Amount(amount){
       this.acc_Bal=this.acc_Bal +amount // here using this keyword to access inside class members
    }
}

let a1=new Account()
let a2=new Account()

a1.deposit_Amount(500)
console.log(a1)