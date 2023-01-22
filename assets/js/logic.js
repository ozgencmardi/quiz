// Start quiz button
const startButton = document.querySelector("#submit");
startButton.addEventListener("click", startQuiz);

// Function to start the quiz
function startQuiz() {
  // Hide start button and display first question
  startButton.style.display = "none";
  showQuestion(currentQuestionIndex);

  // Start timer
  setInterval(() => {
    timeLeft--;
    updateTimeLeft();
    if (timeLeft === 0) {
      endQuiz();
    }
  }, 1000);
}

