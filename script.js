//take user prompt number - store in variable1
//take user operator
//take user prompt number - store in variable 2
//evaluate the equation - store answer in variable 1 
//take user operator
// if eqal is chosen, display variable 1
//if a new operator is chosen
//take user promp for number - store in variable 2
//evaluate the equation

const buttonDigits = document.querySelectorAll('.buttonDigit')
const buttonOperators = document.querySelectorAll('.buttonOperation')
const buttonEqual = document.querySelector('#equal')
const buttonDelete = document.querySelector('#delete')
const buttonClear = document.querySelector('#clear')
const historicalDisplayScreen = document.querySelector('#historicalDisplayScreen')
const displayScreen = document.querySelector('#displayScreen')


buttonDigits.forEach(button => button.addEventListener('click', userInputNumber))
buttonOperators.forEach(button => button.addEventListener('click', userInputOperator))
buttonEqual.addEventListener('click', equal)



// let valueA = 0
// let valueB = 0
let answer
let firstOperator
let secondOperator
let userInputArray = []
let userInputString
let userInputInteger
let storedValue
let userInput = ''
let userInputFloat
let values = {
    valueA: null,
    valueB: null,
}



function userInputNumber() {
    userInput += this.textContent
    displayScreen.textContent = userInput

    userInputFloat = parseFloat(userInput)

    //   let userInput = parseInt(this.textContent)
    //  userInputArray.push(userInput)
    //  userInputString = userInputArray.join('')
    //  userInputInteger = parseInt(userInputString)
    //  displayScreen.textContent = userInputInteger



}


function add(a, b) {
    return a + b
}



function userInputOperator() {

    if (values['valueB'] == null) {
        firstOperator = this.id
        values['valueA'] = userInputFloat
        displayScreen.textContent = values['valueA']
        userInput = ''
    } else {
        `${firstOperator}`(values['valueA'], values['valueB'])
        firstOperator = this.id
        values['valueA'] = userInputFloat
        displayScreen.textContent = values['valueA']
        userInput = ''

    }



    //    values['valueA'] = userInputInteger
    //   userInputArray = []
    //  evaluation()
}


function equal() {
    values['valueB'] = userInputInteger
    let evaluation1 = add(values['valueA'], values['valueB'])
    displayScreen.textContent = evaluation1
}







function evaluation() {


    if (values['valueB'] == null) {


    } else {


        if (operator === 'add') {
            answer = values['valueB'] + values['valueA']
            displayScreen.textContent = answer
            values['valueB'] = answer
            operator = ''

        } else if (operator === 'subtract') {
            answer = values['valueB'] - values['valueA']
            displayScreen.textContent = answer
            values['valueB'] = answer
            operator = ''

        } else if (operator === 'multiply') {
            answer = values['valueB'] * values['valueA']
            displayScreen.textContent = answer
            values['valueB'] = storedValue

        } else if (operator === 'divide') {
            answer = values['valueB'] / values['valueA']
            displayScreen.textContent = answer
            storedValue = answer
            values['valueB'] = storedValue

        }
    }


}




function userPromptNumber() {
    let userPrompt = prompt('What is your first number')
    valueA = parseInt(userPrompt)
    userPromptOperator()
}





function userPromptOperator() {
    let userPromptOperator = prompt('What is your operator (+, -, *, /, =)')
    operator = userPromptOperator
    evaluate()
}



function evaluate() {

    if (operator === '+') {
        let valueB = parseInt(prompt('What is your next number?'))
        let answer = valueA + valueB
        console.log(answer)
        valueA = answer
        userPromptOperator()
    } else if (operator === '-') {
        let valueB = parseInt(prompt('What is your next number?'))
        let answer = valueA - valueB
        console.log(answer)
        valueA = answer
        userPromptOperator()
    } else if (operator === '*') {
        let valueB = parseInt(prompt('What is your next number?'))
        let answer = valueA * valueB
        console.log(answer)
        valueA = answer
        userPromptOperator()
    } else if (operator === '/') {
        let valueB = parseInt(prompt('What is your next number?'))
        let answer = valueA / valueB
        console.log(answer)
        valueA = answer
        userPromptOperator()
    } else if (operator === '=') {
        let answer = valueA
        console.log(answer)
    }
}
