console.log("Hello there!");

// In your JavaScript, put an event listener on each of the buttons.
// Copy the code below an implement a basic calculator.
// When the user performs one of the operations, output the result to another DOM element of your choice.

var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
document.getElementById("add").addEventListener("click", function() {
  output.innerHTML = total(num1.value, num2.value, add)
});

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
document.getElementById("subtract").addEventListener("click", function() {
  output.innerHTML = total(num1.value, num2.value, subtract)
});


// //   Create a function that divides two numbers
// //   passed in as arguments. Return the quotient.
document.getElementById("multiply").addEventListener("click", function() {
  output.innerHTML = total(num1.value, num2.value, multiply)
}); 

// //   Create a function that divides two numbers
// //   passed in as arguments. Return the quotient.
document.getElementById("divide").addEventListener("click", function() {
  output.innerHTML = total(num1.value, num2.value, divide)
});

function add(num1, num2) {
  return parseInt(num1) + parseInt(num2);
};

function subtract(num1, num2) {
  return parseInt(num1) - parseInt(num2);
};

function multiply(num1, num2) {
  return parseInt(num1) * parseInt(num2);
};

function divide(num1, num2) {
  return parseInt(num1) / parseInt(num2);
};

function total(num1, num2, operation) {
  return operation(num1, num2)
}

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */