/* let numbers=[1,2,3,4,5,6,7,8,9,10]
//creating new array with even number

let even_numbers=[]

for(number of numbers){
    if(number % 2 ==0){
        even_numbers.push(number)
    }
}
console.log(even_numbers) */

//using filter()method

let numbers=[1,2,3,4,5,6,7,8,9,10]

let even_numbers=numbers.filter((number)=>{
    return number%2==0
})
console.log(even_numbers)