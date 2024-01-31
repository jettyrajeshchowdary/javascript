var car = {
    color : "white",
    width : 30,
    length : 60,
    gasfull : true,
    run : function(){
        console.log("Fuel Full");
    } 
};
if (car.gasfull == true){
    car.run();
}
else {
    console.log ("Fuel Empty")
}