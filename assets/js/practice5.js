// Variables
let calculator = document.getElementById("calculator");

// Mini Calculator Function
const miniCalculator = () => {
let op = prompt(
    "Please Select a Number to Execute Operation: \n 1. Summation \n 2. Substraction \n 3. Multiplication \n 4. Division"
);

  // While to repeat menu
while (op !== "1" && op !== "2" && op !== "3" && op !== "4" && op!= null) {
    op = prompt(
    "ERROR: PLEASE SELECT A NUMBER BETWEEN 1 AND 4 \n\n Please Select a Number to Execute Operation: \n 1. Summation \n 2. Substraction \n 3. Multiplication \n 4. Division"
    );
}
  // Validate the selected option
  // parseInt(op) >0 && parseInt(op) <= 4
  // op == "1" || op == "2" || op == "3" || op == "4"
if (op !== "1" && op !== "2" && op !== "3" && op !== "4") {
    alert("You have exited the app!");
} else {
    // We must request the user to input the two numbers for the ops
    let num1 = prompt("Please Enter the First Number");
    let num2 = prompt("Please Enter the Second Number");
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let result = 0;
    // Validate correct data in variables num1 and num2
    // Validate Summation
    if (op === "1") {
    result = num1 + num2;
    }
    // Validate Substraction
    if (op === "2") {
    result = num1 - num2;
    }
    // Validate Multiplication
    if (op === "3") {
      result = num1 * num2;
    }
    // Validate Division
    if (op === "4") {
    if (num2 === 0) {
        alert("You Cannot Divide by Zero");
    } else {
        result = num1 / num2;
    }
    }
    console.log(result);
    alert("The Result is " + result);
}
};

//OnClick
calculator.onclick = function () {
miniCalculator();
};
