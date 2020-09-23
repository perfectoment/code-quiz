//global variables
let currentQuestion = 0

//this div is a container around the answers
let answers = document.getElementById("answers");
var questionsDisplay = document.getElementById("question");
var startContainer = document.getElementById("start-card");
let questionsContainer = document.getElementById("questions-card");
var initalsContainer = document.getElementById("initals-card");
var strtButton = document.querySelector(".start-btn");
var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var button3 = document.getElementById("btn3");
var button4 = document.getElementById("btn4");
// var time = document.getElementById("time");
// var mainEl = document.getElementById("main");
var secondsLeft = 0;
var correctCounter ={}

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


// strtButton.addEventListener("click", function() {
//     startContainer.setAttribute("class", "hide");
//     initalsContainer.setAttribute("class", "hide");
//     questionsContainer.setAttribute("class", "card text-center"); 
// }

let question = questions[currentQuestion];
// )
button1.addEventListener("click", function () {
    console.log("Tripped!")
    if(question.choices[0] = question.answer[0]){
        currentQuestion++
        showCurrentQuestion()
    }
    else{
         secondsLeft = -10
         currentQuestion++
         showCurrentQuestion()
    }
})
button2.addEventListener("click", function () {
    currentQuestion++
    showCurrentQuestion()
})

button3.addEventListener("click", function () {
    currentQuestion++
    showCurrentQuestion()
})

button4.addEventListener("click", function () {
    currentQuestion++
    showCurrentQuestion()
})


/*FUNCTIONS */
function showCurrentQuestion() {
    let question = questions[currentQuestion];
    questionsDisplay.textContent = question.title;
    button1.textContent = question.choices[0];
    button2.textContent = question.choices[1];
    button3.textContent = question.choices[2];
    button4.textContent = question.choices[3];
    
    
     
    console.log(question)
}
// }
       
      
// var secondsLeft = 60;
/*ENTRY POINT */
function start() {
    strtButton.addEventListener("click", function() {
        startContainer.setAttribute("class", "hide");
        initalsContainer.setAttribute("class", "hide");
        questionsContainer.setAttribute("class", "card text-center"); 

    }
    )
    strtButton.addEventListener("click", function() {
    var secondsLeft = 60;
    var time = document.getElementById("time");
    var mainEl = document.getElementById("main");
    
    // strtButton.addEventListener("click", start); {

        var timerInterval = setInterval(function() {
            secondsLeft--;
            time.textContent = secondsLeft + " seconds left ";
        
            if(secondsLeft === 0) {
              clearInterval(timerInterval);
              sendMessage();
            }
        
          }, 1000);
        // }
        
     
     }
    )}
    
    // }
    
    showCurrentQuestion()


start()
