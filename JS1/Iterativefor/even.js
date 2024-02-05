let prompt =require('prompt-sync')();

var evenNumbers = [];

// Read 5 numbers from the user.
for (var i = 0; i < 5; i++) {
  var number = parseInt(prompt("Enter a number:"));

  // Check if the number is even.
  if (number % 2 === 0) {
    // Add the number to the evenNumbers array.
    evenNumbers.push(number);
  }
}

// Print the even numbers.
for (var i = 0; i < evenNumbers.length; i++) {
  console.log(evenNumbers[i]);
}