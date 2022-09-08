function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function divide(a, b) {
    return a / b
}

function multiply(a, b) {
    return a * b
}

function operate(operator, a, b) {
    return operator(a, b)

}

const calcButtons = document.querySelectorAll('.buttonDigit')
const displayScreen = document.querySelector('#displayScreen')
let inputValueArray = []
let currentHoldValue

function updateDisplay() {
    let inputValueString = inputValueArray.join('')
    let inputValueInt = parseInt(inputValueString)
    displayScreen.textContent = inputValueInt

    currentHoldValue = parseInt(displayScreen.textContent)

}

function collectInput() {
    inputValueArray.push(this.textContent);
    updateDisplay()

}


calcButtons.forEach(button => button.addEventListener('click', collectInput))

