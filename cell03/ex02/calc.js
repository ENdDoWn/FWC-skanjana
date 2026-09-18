const calculator = document.getElementById('calculator');

calculator.addEventListener('submit', function (event) {
    event.preventDefault();

    const left = document.getElementById('left-number').value;
    const right = document.getElementById('right-number').value;
    const operator = document.getElementById('operator').value;

    if (!/^\d+$/.test(left) || !/^\d+$/.test(right)) {
        alert('Error :(');
        return;
    }

    const firstNumber = Number(left);
    const secondNumber = Number(right);

    if (secondNumber === 0 && (operator === '/' || operator === '%')) {
        alert("It's over 9000!");
        return;
    }

    let result;

    if (operator === '+') {
        result = firstNumber + secondNumber;
    } else if (operator === '-') {
        result = firstNumber - secondNumber;
    } else if (operator === '*') {
        result = firstNumber * secondNumber;
    } else if (operator === '/') {
        result = firstNumber / secondNumber;
    } else {
        result = firstNumber % secondNumber;
    }

    alert(result);
    console.log(result);
});

setInterval(function () {
    alert('Please, use me...');
}, 30000);
