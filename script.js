function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 + num2;

    if (isNaN(result)) {
        document.getElementById('result').textContent = 'Please enter valid numbers.';
    } else {
        document.getElementById('result').textContent = `Result: ${result}`;
    }
}
