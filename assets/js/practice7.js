// Variables globales
// Divs
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
//Buttons
let btnNum1 = document.getElementById("btnNum1");
let btnNum2 = document.getElementById("btnNum2");
let btnNum3 = document.getElementById("btnNum3");
let btnNum4 = document.getElementById("btnNum4");
let btnNum5 = document.getElementById("btnNum5");
let btnNum6 = document.getElementById("btnNum6");
let btnNum7 = document.getElementById("btnNum7");
let btnNum8 = document.getElementById("btnNum8");
let btnNum9 = document.getElementById("btnNum9");
let btnNum0 = document.getElementById("btnNum0");
// Operation Buttons
let btnSum = document.getElementById("btnSum");
let btnSub = document.getElementById("btnSub");
let btnMul = document.getElementById("btnMul");
let btnDiv = document.getElementById("btnDiv");
let btnEq = document.getElementById("btnEq");
// Temp variables
let num1Temp = "";
let num2Temp = "";
let op = "";
let calculator = document.getElementById("calculator");

const btnNum1F = () => {
    if (op === "") {
    number1.innerHTML = num1Temp + "1";
    num1Temp = num1Temp + "1";
    console.log(num1Temp);
    } else {
    number2.innerHTML = num2Temp + "1";
    num2Temp = num2Temp + "1";
    console.log(num1Temp);
    }
};
const btnNum2F = () => {
    if (op === "") {
    number1.innerHTML = num1Temp + "2";
    num1Temp = num1Temp + "2";
    console.log(num1Temp);
    } else {
    number2.innerHTML = num2Temp + "2";
    num2Temp = num2Temp + "2";
    console.log(num1Temp);
    }
};
const btnNum3F = () => {
    if (op === "") {
    number1.innerHTML = num1Temp + "3";
    num1Temp = num1Temp + "3";
    console.log(num1Temp);
    } else {
    number2.innerHTML = num2Temp + "3";
    num2Temp = num2Temp + "3";
    console.log(num1Temp);
    }
};
const btnNum4F = () => {
    if (op === "") {
    number1.innerHTML = num1Temp + "4";
    num1Temp = num1Temp + "4";
    console.log(num1Temp);
    } else {
    number2.innerHTML = num2Temp + "4";
    num2Temp = num2Temp + "4";
    console.log(num1Temp);
    }
};
const btnNum5F = () => {
    if (op === "") {
    number1.innerHTML = num1Temp + "5";
    num1Temp = num1Temp + "5";
    console.log(num1Temp);
    } else {
    number2.innerHTML = num2Temp + "5";
    num2Temp = num2Temp + "5";
    console.log(num1Temp);
    }
};
const btnNum6F = () => {
    if (op === "") {
    number1.innerHTML = num1Temp + "6";
    num1Temp = num1Temp + "6";
    console.log(num1Temp);
    } else {
    number2.innerHTML = num2Temp + "6";
    num2Temp = num2Temp + "6";
    console.log(num1Temp);
    }
};
const btnNum7F = () => {
    if (op === "") {
    number1.innerHTML = num1Temp + "7";
    num1Temp = num1Temp + "7";
    console.log(num1Temp);
    } else {
    number2.innerHTML = num2Temp + "7";
    num2Temp = num2Temp + "7";
    console.log(num1Temp);
    }
};
const btnNum8F = () => {
    if (op === "") {
    number1.innerHTML = num1Temp + "8";
    num1Temp = num1Temp + "8";
    console.log(num1Temp);
    } else {
    number2.innerHTML = num2Temp + "8";
    num2Temp = num2Temp + "8";
        console.log(num1Temp);
    }
};
const btnNum9F = () => {
    if (op === "") {
    number1.innerHTML = num1Temp + "9";
    num1Temp = num1Temp + "9";
    console.log(num1Temp);
    } else {
    number2.innerHTML = num2Temp + "9";
    num2Temp = num2Temp + "9";
    console.log(num1Temp);
    }
};
const btnNum0F = () => {
    if (op === "") {
    number1.innerHTML = num1Temp + "0";
    num1Temp = num1Temp + "0";
    console.log(num1Temp);
    } else {
    number2.innerHTML = num2Temp + "0";
    num2Temp = num2Temp + "0";
    console.log(num1Temp);
    }
};
// Functions for Operations
const btnSumF = () => {
    if (num1Temp === "") {
    alert("Please enter a number before Adding");
    } else {
    op = "+";
    console.log(op);
    }
};
const btnSubF = () => {
    if (num1Temp === "") {
    alert("Please enter a number before Substracting");
    } else {
    op = "-";
    console.log(op);
    }
};
const btnMulF = () => {
    if (num1Temp === "") {
    alert("Please enter a number before Multiplying");
    } else {
    op = "x";
    console.log(op);
    }
};
const btnDivF = () => {
    if (num1Temp === "") {
    alert("Please enter a number before Dividing");
    } else {
    op = "/";
    console.log(op);
    }
};
// Function for Equal
const btnEqF = () => {
    if (num1Temp === "" || num2Temp === "" || op === "") {
    alert("Insufficient Data in Order to Carry Out Operation");
    } else {
    miniCalculator();
    }
};
// Funcion que ejecuta la Mini calculadora
const miniCalculator = () => {
  // solicitamos los dos numeros para la operacion a realizar
    num1Temp = parseFloat(num1Temp);
    num2Temp = parseFloat(num2Temp);
    let result = 0;
  // Validar datos correctos en varaibles num1 y num2 (expresiones regulares)
  // Validamos que la operacion sea suma "1"
    if (op === "+") {
    result = num1Temp + num2Temp;
    }
  // validamos la resta "2"
    if (op === "-") {
    result = num1Temp - num2Temp;
    }
  // validamos la multiplicacion "3"
    if (op === "x") {
    result = num1Temp * num2Temp;
    }
  // validamos la division "4"
    if (op === "/") {
    if (num2Temp === 0) {
        alert("You cannot divide by zero!");
    } else {
        result = num1Temp / num2Temp;
    }
    }
    alert("The result is " + result);
};

// Onclick
btnNum1.onclick = function () {
    btnNum1F();
};
btnNum2.onclick = function () {
    btnNum2F();
};
btnNum3.onclick = function () {
    btnNum3F();
};
btnNum4.onclick = function () {
    btnNum4F();
};
btnNum5.onclick = function () {
    btnNum5F();
};
btnNum6.onclick = function () {
    btnNum6F();
};
btnNum7.onclick = function () {
    btnNum7F();
};
btnNum8.onclick = function () {
    btnNum8F();
};
btnNum9.onclick = function () {
    btnNum9F();
};
btnNum0.onclick = function () {
    btnNum0F();
};
calculator.onclick = function () {
    miniCalculator();
};

// Operations button OnClick

btnSum.onclick = function () {
    btnSumF();
};
btnSub.onclick = function () {
    btnSubF();
};
btnMul.onclick = function () {
    btnMulF();
};
btnDiv.onclick = function () {
    btnDivF();
};
btnEq.onclick = function () {
    btnEqF();
};
