let displayValue = '';

function drawNumbers() {
    const numbersContainer = document.querySelector('.button-container');

    for (let i = 0; i <= 9; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.classList.add('calculator-button', 'orange');
        button.addEventListener('click', () => appendToDisplay(i.toString()));
        numbersContainer.appendChild(button);
    }
    
    const zeroButton = document.createElement('button');
    zeroButton.textContent = '0';
    zeroButton.classList.add('calculator-button', 'orange');
    zeroButton.addEventListener
}

drawNumbers();

function drawOperators() {
    const operatorsContainer = document.querySelector('.button-container');

    const operators = ['+', '-', '*', '/', '=','C','Borrar'];

    operators.forEach(operator => {
        const button = document.createElement('button');
        button.textContent = operator;
        button.classList.add('calculator-button', 'green');
        button.addEventListener('click', () => {
            if (operator === '=') {
                Resultado();
            } else if (operator === 'C') {
                clearDisplay();
            } else if (operator === 'Borrar') {
                eliminar();
            } else {
                addToDisplay(operator);
            }
        });
        operatorsContainer.appendChild(button);
    });
}

drawOperators();



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

