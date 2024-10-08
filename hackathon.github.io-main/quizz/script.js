const apiUrl = 'https://opentdb.com/api.php?amount=10&category=17&type=multiple'; // Fetch 10 questions
let correct_answer = ""
let questions = ""
let index = 0
let score = 0

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        questions = data.results
        nextQuestion(questions)
    })
    .catch(error => {
        console.error('Error fetching questions:', error);
    });

let options = document.getElementsByClassName("btn")
let questionTag = document.getElementById("questionTag")
let scoreTag = document.getElementById("score")

function addOptions(arr) {
    let correct = arr[index].correct_answer
    let incorrects = arr[index].incorrect_answers
    options[0].innerText = correct
    for (let i = 0; i < incorrects.length; i++) {
        console.log(incorrects[i])
        options[i + 1].innerText = incorrects[i]
    }
    let allOptions = incorrects.concat(correct).sort()
    for (let i = 0; i < options.length; i++) {
        options[i].innerText = allOptions[i]
        options[i].style.backgroundColor = ''
        let isCorrectOption = allOptions[i] === correct
        options[i].onclick = () => isCorrect(isCorrectOption, options[i]);
    }

    correct_answer = correct;
    console.log(correct)
}

function addQuestion(questions) {
    questionTag.innerHTML = questions[index].question
}

function isCorrect(correct, button) {
    if (correct) {
        button.style.backgroundColor = "#76ffd6"
        score++
    } else {
        button.style.backgroundColor = "#ff7676"
    }
    for (let option of options) {
        if (option.innerText === correct_answer) {
            option.style.backgroundColor = "#76ffd6"
            break;
        }
    }
}

function next() {
    index++
    if (index < questions.length) {
        nextQuestion(questions)
    } else {
        displayScore()
    }
}



function nextQuestion(questions) {
    console.log(questions)
    addQuestion(questions)
    addOptions(questions)
}

function displayScore() {
    let userData = JSON.parse(localStorage.getItem('userData'));
    let name = userData ? userData.name : "User";
    questionTag.innerHTML = `Congratulations, ${name}!`
    for (let option of options) {
        option.style.display = 'none'
    }
    scoreTag.innerHTML = `Final Score: ${score}/${questions.length}`
}