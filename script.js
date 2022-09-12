const displayScreen = document.querySelector('#displayScreen')
const buttonDigits = document.querySelectorAll('.buttonDigit')
const buttonAdd = document.querySelector('#add')
const buttonEqual = document.querySelector('#equal')



let inputValueArray = []
let totalValueArray =[]
let valueA = 0
let valueB = 0
let operator;

buttonDigits.forEach(button => button.addEventListener('click', collectInput))
buttonAdd.addEventListener('click', operate)
buttonEqual.addEventListener('click', collectValueB)



function collectInput() {
    inputValueArray.push(this.textContent);
    updateDisplay()
}

function updateDisplay() {
    let inputValueString = inputValueArray.join('')
    let inputValueInt = parseInt(inputValueString)
    displayScreen.textContent = inputValueInt
    valueA = inputValueInt
}



function operate() {
    operator = this.id

    if (operator === 'add') {
        displayScreen.textContent = add(valueA, valueB)
        valueA = parseInt(displayScreen.textContent)
        resetDisplay()
    } else {
        console.log('oop')
    }
    }



function resetDisplay() {
    // When an operator is pressed
    //display the static current value
    //but quietly reset the value
    displayScreen.textContent = valueA
    inputValueArray = []
}

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


function collectValueB() {
    let inputValueString = inputValueArray.join('')
    let inputValueInt = parseInt(inputValueString)
    valueB = inputValueInt
    operate()
}

function collectValue() {
    let inputValueString = inputValueArray.join('')
    let inputValueInt = parseInt(inputValueString)
    valueA = inputValueInt
    resetDisplay()
}










//When a user hits the number key, the numbers should concat and appear on the screen.
//When a user hits the decimal key, a period should be concat in the numbers
//When a user hits the operator key, the current value on the screen should be held as n1.
//when the user hits the equals kee
// we need to decide what to do depending on what button is pressed