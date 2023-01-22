// Global variables
let currentQuestion = 0;
let score = 0;
let timer = 0;
let intervalId = 0;

// Get elements from the DOM
const questionTitle = document.querySelector("#question-title");
const choices = document.querySelector("#choices");
const feedback = document.querySelector("#feedback");
const finalScore = document.querySelector("#final-score");

// Start quiz function
function startQuiz() {
  // Hide start screen
  const startScreen = document.querySelector("#start-screen");
  startScreen.style.display = "none";

  // Show questions
  const questions = document.querySelector("#questions");
  questions.style.display = "block";

  // Start timer
  timer = 60;
  intervalId = setInterval(updateTimer, 1000);

  // Display first question
  displayQuestion();
}
