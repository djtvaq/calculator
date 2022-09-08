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

const calcButtons = document.querySelectorAll('.buttonGeneric')
const displayScreen = document.querySelector('#displayScreen')
let inputValueArray = []






function updateDisplay() {
    let inputValueString = inputValueArray.join('')
    let inputValueInt = parseInt(inputValueString)
    displayScreen.textContent = inputValueInt

}

function collectInput() {
    inputValueArray.push(this.textContent);
    updateDisplay()

}


calcButtons.forEach(button => button.addEventListener('click', collectInput))