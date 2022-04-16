// Declaring variables
var header = document.getElementById("header");
var intropage = document.getElementById("intro-page");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choices = document.getElementById("choices");
var choice1 = document.getElementById("1");
var choice2 = document.getElementById("2");
var choice3 = document.getElementById("3");
var choice4 = document.getElementById("4");
var finalScore = document.getElementById("finalscore");
var message = document.getElementsByClassName("message");
var result = document.getElementById("result");
var scorelist = document.getElementById("scorelist");
var startbtn = document.getElementById("start");
var highscore = document.getElementsByClassName("highscore");
var answer = document.getElementById("answer");

// The array of the questions
var questions = [
{question: "Commonly used data types DO Not Include:",
    choice1 : "1. strings",
    choice2 : "2. booleans",
    choice3 : "3. alerts",
    choice4 : "4. numbers",
    correct : "3"
},

{question: "The condition in an if/else statemetn is enclosed with _________.",
choice1 : "1. quotes",
choice2 : "2. curly brakets",
choice3 : "3. parenthesis",
choice4 : "4. square brackets",
correct : "2"
},

{question: "Arrays in JavaScript can be used to store___________.",
choice1 : "1. numbers and strings",
choice2 : "2. other arrays",
choice3 : "3. booleans",
choice4 : "4. all of the above",
correct : "4"
},

{question: "String values must be enclosed within ___________ when being assigned to variables.",
choice1 : "1. commas",
choice2 : "2. curly brackets",
choice3 : "3. quotes",
choice4 : "4. parenthesis",
correct : "3"
},

{question: "A very useful tool used during development and debugging for printing content to the debugger is:",
choice1 : "1. Javascript",
choice2 : "2. terminal/bash",
choice3 : "3. for loops",
choice4 : "4. console.log",
correct : "4"
},
]

// Quiz introduction page

intropage.style.display = "block";
quiz.style.display = "none";
finalScore.style.display = "none";

// Listener event to start the quiz when click "start quiz"
startbtn.addEventListener("click", startQuiz);


// start Quiz

function startQuiz() {
    quiz.style.display = "block";
    question.style.display = "block";
    intropage.style.display = "none";
    finalScore.style.display = "none";

    renderQuestion();
};

// Display Questions 
var lastQuestionIndex = questions.length -1;
var runningQuestionIndex = 0;    

function renderQuestion() {
    var q = questions[runningQuestionIndex];
    question.innerHTML = q.question;
    choice1.innerHTML = q.choice1;
    choice2.innerHTML = q.choice2;
    choice3.innerHTML = q.choice3;
    choice4.innerHTML = q.choice4;
};

// check answers
function checkAnswer(answer) {
if(questions[runningQuestionIndex].correct == answer) {
    answer.textContent = "Correct!"
}
else {
    answer.textContent = "Wrong!"
    
}

if (questions.lenght === runningQuestionIndex+1) {
    resultRender();
    return;
    
}
runningQuestionIndex++;
renderQuestion();
};
