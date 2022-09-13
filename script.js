//take user prompt number - store in variable1
//take user operator
//take user prompt number - store in variable 2
//evaluate the equation - store answer in variable 1 
//take user operator
// if eqal is chosen, display variable 1
//if a new operator is chosen
//take user promp for number - store in variable 2
//evaluate the equation


const displayScreen = document.querySelector('#displayScreen')
const buttonDigits = document.querySelectorAll('.buttonDigit')
const buttonOperators = document.querySelectorAll('.buttonOperation')

buttonDigits.forEach(button => button.addEventListener('click', userInputNumber))
buttonOperators.forEach(button => button.addEventListener('click', userInputOperator))



let valueA = 0
let valueB = 0
let operator
let userInputArray = []
let userInputString
let userInputInteger



function userInputNumber() {
    let userInput = parseInt(this.textContent)
    userInputArray.push(userInput)
    userInputString = userInputArray.join('')
    userInputInteger = parseInt(userInputString)
    displayScreen.textContent = userInputInteger
    valueA = userInputInteger
}

function userPromptNumber() {
    let userPrompt = prompt('What is your first number')
    valueA = parseInt(userPrompt)
    userPromptOperator()
}



function userInputOperator() {
    operator = this.id
    displayScreen.textContent = valueA
    evaluation()
}

function userPromptOperator() {
    let userPromptOperator = prompt('What is your operator (+, -, *, /, =)')
    operator = userPromptOperator
    evaluate()
}



function evaluation() {
    if (operator === '+') {
        

    }



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


