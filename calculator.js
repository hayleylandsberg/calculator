console.log("Hello there!");

// In your JavaScript, put an event listener on each of the buttons.
// Copy the code below an implement a basic calculator.
// When the user performs one of the operations, output the result to another DOM element of your choice.

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
var addBtn = document.getElementById("add");
var subBtn = document.getElementById("subtract");
var multBtn = document.getElementById("multiply");
var divBtn = document.getElementById("divide");
var output = document.getElementById("output");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var div = document.getElementById("output");

addBtn.addEventListener("click", determineAddSum;
subBtn.addEventListener("click", determineSubSum);
multBtn.addEventListener("click", determineMultSum);
divBtn.addEventListener("click", determineDivSum);

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function determineAddSum(){
	var add = (parseInt(num1.value) + parseInt(num2.value));
		div.innerHTML += `Your sum is ${add}`;
};

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function determineSubSum(){
	var subtract = (parseInt(num1.value) - parseInt(num2.value));
		div.innerHTML += `Your sum is ${subtract}`;
};

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function determineMultSum(){
	var multiply = (parseInt(num1.value) * parseInt(num2.value));
		div.innerHTML += `Your sum is ${multiply}`;
};

function determineDivSum(){
	var divide = (parseInt(num1.value) / parseInt(num2.value));
		div.innerHTML += `Your sum is ${divide}`;
};

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */