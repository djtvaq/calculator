//take user prompt number - store in variable1
//take user operator
//take user prompt number - store in variable 2
//evaluate the equation - store answer in variable 1 
//take user operator
// if eqal is chosen, display variable 1
//if a new operator is chosen
//take user promp for number - store in variable 2
//evaluate the equation





let valueA = 0
let operator 



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
    let answer = valueA+valueB
    console.log(answer)
    valueA = answer
    userPromptOperator()
} else if (operator === '-') {
    let valueB = parseInt(prompt('What is your next number?'))
    let answer = valueA-valueB
    console.log(answer)
    valueA = answer
    userPromptOperator()
} else if (operator === '*') {
    let valueB = parseInt(prompt('What is your next number?'))
    let answer = valueA*valueB
    console.log(answer)
    valueA = answer
    userPromptOperator()
} else if (operator === '/') {
    let valueB = parseInt(prompt('What is your next number?'))
    let answer = valueA/valueB
    console.log(answer)
    valueA = answer
    userPromptOperator()
} else if (operator === '=') {
    let answer = valueA
    console.log(answer)
}
}


userPromptNumber()