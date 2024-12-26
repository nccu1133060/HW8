// JavaScript File
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return 'Error: Division by zero';
    }
    return a / b;
}

function calculate() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const operator = document.getElementById('operator').value;
    const resultDisplay = document.getElementById('result');

    if (isNaN(number1) || isNaN(number2)) {
        resultDisplay.textContent = 'Error: Please enter valid numbers';
        return;
    }

    let result;
    switch (operator) {
        case '+':
            result = add(number1, number2);
            break;
        case '-':
            result = subtract(number1, number2);
            break;
        case '*':
            result = multiply(number1, number2);
            break;
        case '/':
            result = divide(number1, number2);
            break;
        default:
            resultDisplay.textContent = 'Error: Please select a valid operator';
            return;
    }

    resultDisplay.textContent = typeof result === 'string' ? result : `Result: ${result.toFixed(2)}`;
}
