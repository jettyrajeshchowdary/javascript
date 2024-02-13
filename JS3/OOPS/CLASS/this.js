class Account{
    acc_Bal = 10000;

    deposit_Amount(amount){
        this.acc_Bal=this.acc_Bal+amount
        
    }
}

let a1 = new Account
let a2 = new Account

a1.deposit_Amount(5000)
a1.deposit_Amount(1200)
a2.deposit_Amount(6000)

console.log(a1)
console.log(a2)