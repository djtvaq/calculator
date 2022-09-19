class Calculator {
    constructor(previousInput, currentInput) {
        this.previousInput = previousInput;
        this.currentInput = currentInput;
        this.clear()
    }

    clear() {
        this.currentInput = ''
        this.previousInput = ''
        this.operator = undefined
        this.updateDisplay()
    }

    delete() {

        this.currentInput = this.currentInput.slice(0,-1)

    }

    inputNumber(number) {
        if (number === '.' && this.currentInput.includes('.')) {
            return
        }
        this.currentInput = this.currentInput.toString() + number.toString()
    }

    inputOperation(operator) {

        if (this.currentInput === '') { return }
        if (this.previousInput !== '') {
            this.evaluate(operator)
        }
        this.operator = operator

        this.previousInput = this.currentInput
        this.currentInput = ''

    }

    evaluate() {
        let answer
        let previousInputFloat = parseFloat(this.previousInput)
        let currentInputFloat = parseFloat(this.currentInput)

        if (isNaN(previousInputFloat) || isNaN(currentInputFloat)) {
            return
        }

        switch (this.operator) {
            case '+':
                answer = previousInputFloat + currentInputFloat;
                break;
            case '-':
                answer = previousInputFloat - currentInputFloat;
                break;
            case '/':
                if (currentInputFloat === 0) {
                    alert('You cannot divide by 0');
                    return
                } else {
                    answer = previousInputFloat / currentInputFloat;
                }

                break;
            case '*':
                answer = previousInputFloat * currentInputFloat;
                break;
            default:
                return
        }

        this.currentInput = answer
        this.operator = undefined
        this.previousInput = ''

    }

    updateDisplay() {

        if (this.operator == undefined) {
            previousInput.innerText = this.previousInput
        } else {
            previousInput.innerText = this.previousInput + ' ' + this.operator
        }
        currentInput.innerText = this.currentInput

    }

}


const buttonDigits = document.querySelectorAll('.buttonDigit')
const buttonOperators = document.querySelectorAll('.buttonOperation')
const buttonEqual = document.querySelector('#equal')
const buttonDelete = document.querySelector('#delete')
const buttonClear = document.querySelector('#clear')
const previousInput = document.querySelector('#historicalDisplayScreen')
const currentInput = document.querySelector('#displayScreen')



const calculator = new Calculator(previousInput, currentInput)


buttonDigits.forEach(button => {
    button.addEventListener('click', () => {
        calculator.inputNumber(button.innerText)
        calculator.updateDisplay()
    })
})

buttonOperators.forEach(button => {
    button.addEventListener('click', () => {
        calculator.inputOperation(button.innerText)
        calculator.updateDisplay()
    })
})

buttonClear.addEventListener('click', () => {

    calculator.clear(),
        calculator.updateDisplay()
})

buttonEqual.addEventListener('click', () => {

    calculator.evaluate()
    calculator.updateDisplay()
})

buttonDelete.addEventListener('click', () => {
    calculator.delete()
    calculator.updateDisplay()


})