const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const questionText = document.getElementById("question-text");
const currentQuestion = document.getElementById("current-question");
const scoreSpan = document.getElementById("score");
const answersContainer = document.getElementById("answers-container");
const progressBar = document.getElementById("progress");
const resultScreen = document.getElementById("result-screen");
const finalScoreSpan = document.getElementById("final-score");
const totalScoreSpan= document.getElementById("total-score");
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
        question: "Which of these is NOT a programming language?"
    }


]

