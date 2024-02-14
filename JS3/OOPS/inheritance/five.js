class GP{
    constructor(){
        console.log("GP Constructor")
    }
    m1(){
        console.log("GP m1 method")
    }
}
class Parent extends GP{
   constructor(){
        super()
        console.log("Parent class Constructor")
    }
    m2(){
                console.log("Parent m2 method")
            }
    }
class Child extends Parent{
 constructor(){
        super()
        console.log("Child Constructor")
    }
m3(){
        console.log("Child m3 method")
    }
}



let c1 = new Child()

c1.m1()
c1.m2()
c1.m3()