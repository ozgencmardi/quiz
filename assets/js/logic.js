
let currentQuestion = 0;
let score = 0;
let timer = 0;
let intervalId = 0;


const questionTitle = document.querySelector("#question-title");
const choices = document.querySelector("#choices");
const feedback = document.querySelector("#feedback");
const finalScore = document.querySelector("#final-score");


document.querySelector("#start").addEventListener("click", startQuiz);



function startQuiz() {
  console.log("Start Quiz button clicked")

  const startScreen = document.querySelector("#start-screen");
  startScreen.style.display = "none";

  const questions = document.querySelector("#questions");
  questions.style.display = "block";

  timer = 60;
  intervalId = setInterval(updateTimer, 1000);

  displayQuestion();
}


function updateTimer() {
  const time = document.querySelector("#time");
  time.textContent = timer;

  if (timer <= 0) {
    endQuiz();
  }
  timer--;
}


