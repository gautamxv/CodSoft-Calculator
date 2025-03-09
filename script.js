function appendToDisplay(value) {
    document.getElementById('display').value += value;
}


function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}


function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1); 
    
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if ('0123456789+-*/'.includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        event.preventDefault(); // Prevent the default backspace action
        backspace();
    } else if (key === 'c' || key === 'C') {
        clearDisplay();
    }
});