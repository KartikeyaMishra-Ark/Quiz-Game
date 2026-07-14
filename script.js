const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const questionText = document.getElementById("question-text");
const currentQuestionSpan = document.getElementById("current-question");
const scoreSpan = document.getElementById("score");
const answersContainer = document.getElementById("answers-container");
const progressBar = document.getElementById("progress");
const resultScreen = document.getElementById("result-screen");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const startButton = document.getElementById("start-btn");
const totalQuestionSpan = document.getElementById("total-questions");


const quizQuestions = [
    {
        question: "What is the capital of France",
        answers: [
            { text: "London", correct:false},
            {text: "Berlin", correct:false},
            {text: "Paris", correct:true},
            {text: "Madrid", correct:false},



        ],
        



    },

    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            {text: "Venus", correct:false},
            {text: "Mars", correct:true},
            {text: "Jupiter", correct:false},
            {text: "Saturn", correct:false}


        ],        


    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            {text: "Atlantic", correct:false},
            {text: "Pacific", correct:true},
            {text: "Indian", correct:false},
            {text: "Arctic", correct:false},

        ],
    },
    {
        question: "Which of these is NOT a programming language?",
        answers: [  
            {text: "Python", correct:false},
            {text: "Java", correct:false},
            {text: "Banana", correct:true},
            {text: "C++", correct:false},
        ],

    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            {text: "Go", correct:false},
            {text: "Au", correct:true},
            {text: "Ag", correct:false},
            {text: "Gd", correct:false},
        ],
    },



];


//Game State//

let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;


totalQuestionSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

//event  listeners

startButton.addEventListener("click", startQuiz)
restartButton.addEventListener("click", restartQuiz)


function startQuiz(){

   

    //reset vars

    currentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent = score;
    

    
    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion();

    

}

function showQuestion() {
    //reset state

    answersDisabled = false

    const currentQuestion = quizQuestions[currentQuestionIndex]

    currentQuestionSpan.textContent = currentQuestionIndex + 1
    
    const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
    progressBar.style.width = progressPercent + "%"

    questionText.textContent = currentQuestion.question

    answersContainer.innerHTML = "";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.textContent = answer.text
        button.classList.add("answer-btn")

        button.dataset.correct = answer.correct

        button.addEventListener("click",selectAnswer)
        answersContainer.appendChild(button);

    });



}

function selectAnswer(event){

    if(answersDisabled) return

    answersDisabled = true
    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    Array.from(answersContainer.children).forEach((button) => {

        if(button.dataset.correct === "true"){

            button.classList.add("correct");



        }

        else{
            button.classList.add("incorrect");

        }


    });

    if(isCorrect){


        score++;
        scoreSpan.textContent = score


    }

    setTimeout(() => {
        currentQuestionIndex++;

        if(currentQuestionIndex < quizQuestions.length) {
            showQuestion()
            


        }
        else{

            showResults()

        }




    },1000)

    


}

function showResults(){
    quizScreen.classList.remove("active")
    resultScreen.classList.add("active")

    finalScoreSpan.textContent = score;

    const percentage = (score/quizQuestions.length) * 100

    if(percentage === 100){
        resultMessage.textContent = "Perfect! You're a genius";



    }
    else if (percentage >= 80) {
        resultMessage.textContent = "Great job! You know your stuff!";

    }
    else if (percentage >= 60) {
        resultMessage.textContent = "Good effort! Keep learning!";


    }
    else if (percentage >= 40){
        resultMessage.textContent = "Not bad! Try again to improve!";


    }
    else {
        resultMessage.textContent = "Keep studying! You'll get better!";

    }





}

console.log(currentQuestionSpan);


function restartQuiz(){
    resultScreen.classList.remove("active");
    startQuiz();

    
}


