function add(a,b) {
    return a+b
}

function subtract(a,b) {
    return a-b
}

function divide(a,b) {
    return a/b
}

function multiply(a,b){
    return a*b
}

function operate(operator, a, b){
return operator(a,b)

}

const calcButtons = document.querySelectorAll('.buttonGeneric')
const displayScreen = document.querySelector('#displayScreen')

function updateDisplay() {
   displayScreen.textContent = this.textContent 

}
calcButtons.forEach(button => button.addEventListener('click', updateDisplay))