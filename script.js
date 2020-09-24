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
// var score = document.getElementById("score");
var highscore = document.getElementById("highscore");
var nameDisplay = []
var submitForm = document.getElementById("submitForm");
var funhaus = document.getElementById("funhaus");

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
    var textPuller = event.target.textContent;
    if(textPuller === questions[currentQuestion].answer){
        correctCounter++;
        currentQuestion++;
        showCurrentQuestion();
        console.log(correctCounter)
        }
    else{
        secondsLeft = (secondsLeft - 10); 
        currentQuestion++;
        showCurrentQuestion();
        
    }
    document.getElementById("score").innerText = "Your Score Is: " + correctCounter;
    }

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

        var timerInterval = setInterval(function() {
            secondsLeft--;
            time.textContent = secondsLeft + " seconds left ";
        
            if(secondsLeft === 0 || currentQuestion === questions.length) {
              clearInterval(timerInterval);
              startContainer.setAttribute("class", "hide");
              initalsContainer.setAttribute("class", "card text-center");
              questionsContainer.setAttribute("class", "hide");
            
              
            }
        
          }, 1000);
 
        
     
     }
    )}





// renderTodos();

function renderTodos() {
  funhaus.textContent = "";

  // Render a new li for each todo
  for (var i = 0; i < nameDisplay.length; i++) {
    var todo = nameDisplay[i];

    var li = document.createElement("li");
    li.textContent = todo;
    funhaus.appendChild(li);
  }
}

// When form is submitted...
highscore.addEventListener("click", function(event) {
  event.preventDefault();

  var Text = submitForm.value.trim();

  if (Text === "") {
    return;
  }

  nameDisplay.push(Text + " " + correctCounter);
  submitForm.value = "";

  renderTodos();
});

// var highscore = document.getElementById("highscore");
// var nameDisplay = []
// var submitForm = document.getElementById("submitForm");
// var funhaus = document.getElementById("funhaus");

    
 
    
    

    

    
    showCurrentQuestion()


start()
