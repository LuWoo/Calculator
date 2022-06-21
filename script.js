let a = "";
let b = "";
let operand = "";
let answer;
const operations = ["+", "-", "*", "/"];

function add() {
    return a + b;
}

function subtract() {
    return a - b;
}

function multiply() {
    return a * b;
}

function divide() {
    return a / b;
}

function operate() {
    a = Number(a);
    b = Number(b);
    if (operand == "+") {answer = add(a, b)}
    if (operand == "-") {answer = subtract(a, b)}
    if (operand == "*") {answer = multiply(a, b)}
    if (operand == "/") {answer = divide(a, b)}
    a = answer;
    b = "";
    if (!answer) {
        updateScreen("");
        a = "";
    }
    else {
        updateScreen(answer);
    }
}

function updateScreen(inputText) {
    const screen = document.querySelector('.screen')
    if (inputText == "clr") {
        screen.value = "";
    }
    else {
        screen.value = inputText;
    }
}

function newDigit(digit) {
    if (digit == "=") {operate()}
    else if (digit == "clr") {clrScreen()}
    else if (operations.includes(digit)) {
        operand = digit
        updateScreen(digit)
    }
    else if (!operand) { //Check if there has been an operation pressed
        a = a + digit
        updateScreen(a)
    }
    else if (operand) {
        b = b + digit
        updateScreen(b)
    }
}

function clrScreen() {
    a = "";
    b = "";
    operand = "";
    answer = "";
    updateScreen("clr")
}

const buttons = document.querySelectorAll('button');

buttons.forEach(function (button) {
   
    button.addEventListener('click', function() {
        console.log(operand)
        newDigit(button.id)
    })
})
