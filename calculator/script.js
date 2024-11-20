let display = document.getElementById('display');
let currentExpression = ''; 
let shouldResetDisplay = false;

function appendValue(value) {
    if (shouldResetDisplay) {
        display.value = '';
        shouldResetDisplay = false;
    }


    display.value = display.value === '0' ? value : display.value + value;
    currentExpression += value;
    updateDisplay();
}

function setOperator(operator) {
    if (shouldResetDisplay || currentExpression === '') return;
    currentExpression += ` ${operator} `;
    shouldResetDisplay = true;
    updateDisplay();
}

function calculate() {
    try {
        let result = eval(currentExpression.replace('×', '*').replace('÷', '/'));
        display.value = result;
        currentExpression = result.toString(); 
    } catch (error) {
        display.value = 'Error';
        currentExpression = '';
    }
}

function clearDisplay() {
    display.value = '0';
    currentExpression = '';
}

function deleteLast() {
    currentExpression = currentExpression.trim().slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    display.value = currentExpression;
}

