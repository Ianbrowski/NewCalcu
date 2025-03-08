document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('card');
    const startButton = document.getElementById('startButton');
    const backButton = document.getElementById('backButton');

    startButton.addEventListener('click', () => {
        card.classList.add('flipped');
    });

    backButton.addEventListener('click', () => {
        card.classList.remove('flipped');
    });
});


function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculateResult() {
    try {
        const display = document.getElementById('display');
        const expression = display.value;
        const result = evaluateExpression(expression);
        display.value = result;
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}

function evaluateExpression(expression) {
    try {
        return eval(expression);
    } catch (e) {
        throw new Error('Invalid expression');
    }
}

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
        throw new Error('Division by zero is not allowed.');
    }
    return a / b;
}

console.log(add(5, 3));        // Output: 8
console.log(subtract(5, 3));   // Output: 2
console.log(multiply(5, 3));   // Output: 15
console.log(divide(5, 3));     // Output: 1.6666666666666667
// console.log(divide(5, 0));     // Throws Error: Division by zero is not allowed.

