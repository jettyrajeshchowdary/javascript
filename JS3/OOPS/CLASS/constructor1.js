class Account{
    acc_Id;
    acc_Name;
    acc_Bal;

    constructor(id,name,amount){
        this.acc_Id=id;
        this.acc_Name=name;
        this.acc_Bal=amount;
    }

    deposit_Amount(amount){
        this.acc_Bal=this.acc_Bal+amount;
    }

}

var r1 = new Account(101,"Sunil",10000)
console.log(r1);

var r2 = new Account(102,"shanbor",20000)
console.log(r2)

console.log("*************");

r1.deposit_Amount(1000)
console.log(r1);

r2.deposit_Amount(3000)
console.log(r2);