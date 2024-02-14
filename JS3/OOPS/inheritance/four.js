class Account{
    acc_Name;
    acc_Email;
    constructor(name,email){
        this.acc_Name = name 
        this.acc_Email =email
    }
}
class SA extends Account{
    acc_Id;
    acc_Bal;
    min_Bal = 500;
    constructor(id, name,email,amount){
        super(name,email)
        this.acc_Id = id 
        this.acc_Bal =amount
    }
    get_Bal(){
        return this.acc_Bal - this.min_Bal
    }
}

class CA extends Account{
    acc_Id;
    acc_Bal;
    min_Bal = 25000
    constructor(id, name,email,amount){
        super(name,email)
        this.acc_Id = id 
        this.acc_Bal = amount
    }
    get_Bal(){
        return this.acc_Bal - this.min_Bal
    }
}

let sa1=new SA(101,"sunil","sunil@gmail.com",50000)


let ca1= new CA(102, "rajesh","jettyrajesh@gmail.com", 2500000);
console.log(sa1)
console.log(sa1.get_Bal())
console.log("----------------------------------------------")
console.log(ca1)
console.log(ca1.get_Bal())