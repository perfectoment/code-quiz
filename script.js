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
var secondsLeft = 40;
var correctCounter = 0;

let questions = [
    {
        title: "What is the HTML tag under which one can write the JavaScript code?",
        choices: ["Header","Body","Style","Script"],
        answer: "Script"
    },
    {
        title: "Choose the correct JavaScript syntax to change the content of the following HTML code.",
        choices: ["document.getElement(“”).innerHTML","document.getElementById(“”).innerHTML","document.getId(“”)","document.getElementById(“geek”).innerHTML"],
        answer: "document.getElementById(“”).innerHTML",
    },
    {
        title: "What is the correct syntax for referring to an external script called “script.js”?",
        choices: ["<script src=”script.js”>","<script href=”script.js”>", "<script ref=”script.js”>", "<script name=”script.js”>"],
        answer: "<script src=”script.js”>",
    },
    {
        title: "Which of the following is not a reserved word in JavaScript?",
        choices: ["interface","throws","program","short"],
        answer: "program",
    },
]

/*EVETN LISTENERS */
function questionChecker (event) {
    console.log("Tripped!")
    var textPuller = event.target.textContent;
    if(textPuller === questions[currentQuestion].answer){
        currentQuestion++;
        correctCounter++;
        showCurrentQuestion()
        console.log(correctCounter);
    }
    else{
         secondsLeft = (secondsLeft - 10);
         currentQuestion++;
         showCurrentQuestion();
    }
    
    }



// strtButton.addEventListener("click", function() {
//     startContainer.setAttribute("class", "hide");
//     initalsContainer.setAttribute("class", "hide");
//     questionsContainer.setAttribute("class", "card text-center"); 
// }

// let question = questions[currentQuestion];
// )
button1.addEventListener("click", questionChecker);
button2.addEventListener("click", questionChecker);
button3.addEventListener("click", questionChecker);
button4.addEventListener("click", questionChecker);


/*FUNCTIONS */
function showCurrentQuestion() {
    // 
        let question = questions[currentQuestion];
        questionsDisplay.textContent = question.title;
        button1.textContent = question.choices[0];
        button2.textContent = question.choices[1];
        button3.textContent = question.choices[2];
        button4.textContent = question.choices[3];

      }
    

    //   else{        
    //     startContainer.setAttribute("class", "hide");
    //     initalsContainer.setAttribute("class", "card text-center position-absolute");
    //     questionsContainer.setAttribute("class", "hide"); 

    //   }
    console.log(question)

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
    secondsLeft = 45;
    var time = document.getElementById("time");
    // var mainEl = document.getElementById("main");
    
    // strtButton.addEventListener("click", start); {

        var timerInterval = setInterval(function() {
            secondsLeft--;
            time.textContent = secondsLeft + " seconds left ";
        
            if(secondsLeft === 0 || currentQuestion > 3) {
              clearInterval(timerInterval);
              startContainer.setAttribute("class", "hide");
              initalsContainer.setAttribute("class", "card text-center");
              questionsContainer.setAttribute("class", "hide"); 
            }
        
          }, 1000);
        // }
        
     
     }
    )}


function highScores(){

    
}
    
    // }
    
    showCurrentQuestion()


start()
