//global variables
let currentQuestion = 0

//this div is a container around the answers
let answers = document.querySelector(".answers")
var questionsDisplay = document.getElementById("question")

let questions = [
    {
        title: "What is the HTML tag under which one can write the JavaScript code?",
        choices: ["Header", "Body","Style", "Script"],
        answer: "Script"
    },
    {
        title: "Choose the correct JavaScript syntax to change the content of the following HTML code.",
        choices: ["document.getElement(“geek”).innerHTML", "document.getElementById(“geek”).innerHTML", "document.getId(“”)", "document.getElementById(“geek”).innerHTML"],
        answer: "document.getElementById(“geek”).innerHTML",
    },
    {
        title: "What is the correct syntax for referring to an external script called “script.js”?",
        choices: ["<script src=”geek.js”>", "<script href=”geek.js”>", "<script ref=”geek.js”>", "<script name=”geek.js”>"],
        answer: "<script src=”geek.js”>",
    },
    {
        title: "Which of the following is not a reserved word in JavaScript?",
        choices: ["interface", "throws", "program", "short"],
        answer: "program",
    },
]

/*EVETN LISTENERS */

//this is when user answers question
answers.addEventListener("click", function (event) {
    console.log("Tripped!")
    if (event.target.tagName === "BUTTON") {
        //check if answer is correct
        //-> event.target.textContent === ?

        //show the next question
        currentQuestion++
        showCurrentQuestion()
    }
})

/*FUNCTIONS */
function showCurrentQuestion() {
    let question = questions[currentQuestion];
    questionsDisplay.textContent = question.title;
    console.log(question)
}

/*ENTRY POINT */
function start() {
    //start the timer

    //hide some text from landing page

    //show first question
    showCurrentQuestion()
}
start()
