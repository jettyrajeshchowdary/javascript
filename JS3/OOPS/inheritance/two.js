class Parent{
    constructor(){
        console.log("parent class constructor")
    }
}
class child extends Parent{
    constructor(){
        super()
        console.log("child class constructor")
    }
    
}new child()