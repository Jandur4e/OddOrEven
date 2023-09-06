function getValueFromNumberInput() {
    let num = document.getElementById('insertNumber').value;
    if (num % 2 === 0) {
        document.getElementById('result').innerHTML = ('The number is even');
    }
    else if (num % 2 === 1) {
        document.getElementById('result').innerHTML = ('The number is odd');
    }
    else {
        document.getElementById('result').innerHTML = ('The number is in decimals')
    }
}