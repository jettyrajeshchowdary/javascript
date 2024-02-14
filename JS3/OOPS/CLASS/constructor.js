class Account{
    acc_Id;
    acc_Name;
    acc_Bal;

    constructor(id,name,amount){
        this.acc_Id=id;
        this.acc_Name=name;
        this.acc_Bal=amount;

    }
}

var a1 = new Account(101,"Siri",1000)
console.log(a1);

var a2 = new Account(102,"Sruthi",2000)
console.log(a2);

var a3 = new Account(103,"nayana",3000)
console.log(a3)