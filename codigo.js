let displayValue = '';

function appendToDisplay(digit) {
    displayValue += digit;
    updateDisplay();
}

function addToDisplay(operator) {
    displayValue += operator;
    updateDisplay();
}

function Resultado() {
    try {
        displayValue = eval(displayValue);
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function eliminar() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    document.querySelector('.custom-input').value = displayValue;
}

const buttons = document.querySelectorAll('.calculator-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        
        if (!isNaN(parseInt(buttonText)) || buttonText === '.') {
            appendToDisplay(buttonText);
        } else if (buttonText === 'C') {
            clearDisplay();
        } else if (buttonText === '=') {
            Resultado();
        } else if (buttonText === 'Borrar') {
            eliminar();
        } else {
            addToDisplay(buttonText);
        }
    });
});
