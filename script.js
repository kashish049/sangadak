let display = document.getElementById('display');
let currentInput = '';
let pendingInput = '';
let currentOperator = null;

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculateResult() {
    if (currentOperator && pendingInput !== '') {
        const result = eval(pendingInput + currentOperator + currentInput);
        display.value = result;
        currentInput = result.toString();
        pendingInput = '';
        currentOperator = null;
    }
}

// Add event listeners for buttons
document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', function() {
        const buttonValue = this.innerText;
        if (!isNaN(buttonValue) || buttonValue === '.') {
            appendToDisplay(buttonValue);
        } else if (buttonValue === 'C') {
            clearDisplay();
        } else if (buttonValue === '=') {
            calculateResult();
        } else {
            if (currentOperator) {
                calculateResult();
            }
            currentOperator = buttonValue;
            pendingInput = currentInput;
            currentInput = '';
        }
    });
});
