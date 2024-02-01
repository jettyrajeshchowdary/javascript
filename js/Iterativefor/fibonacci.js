// Program to print fibonacci series upto a given number

// Final value or upper limit
let numterms = 8;

// First two numbers which are fixed
let num1=0;
let num2=1;

// Print the first two numbers
console.log(num1);
console.log(num2);

// Run a for loop for next term 
for (let i=3;i<=numterms;i++){
    let nexterms = num1+num2;

    // Print next term
    console.log(nexterms);

    // Interchange the value to get next terms or next to it
    num1=num2;
    num2=nexterms;
}