const display = document.getElementById('numberInput');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let previousInput = '';
let operator = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (button.id === 'AC') {
            currentInput = '';
            previousInput = '';
            operator = null;
            display.value = '';
        }
        else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput === '') return;
            operator = value;
            previousInput = currentInput;
            currentInput = '';
        }
        else if (value === '=') {
            if (operator && previousInput !== '' && currentInput !== '') {
                currentInput = eval(`${previousInput}${operator}${currentInput}`).toString();
                display.value = currentInput;
                operator = null;
                previousInput = '';
            }
        }
        else if (value === '%') {
            currentInput = (parseFloat(currentInput) / 100).toString();
            display.value = currentInput;
        }
        else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});
