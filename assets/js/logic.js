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


function displayQuestion() {
  const current = questions[currentQuestion];

  questionTitle.textContent = current.question;

  choices.innerHTML = "";
  current.choices.forEach(function(choice, i) {
    const button = document.createElement("button");
    button.textContent = choice;
    button.addEventListener("click", checkAnswer);
    choices.appendChild(button);
  });
}


function checkAnswer(e) {

  const button = e.target;

  if (button.textContent === questions[currentQuestion].answer) {

    feedback.textContent = "Correct!";
    feedback.classList.add("correct");
    feedback.classList.remove("incorrect");

    score++;

  } else {

    feedback.textContent = "Incorrect!";
    feedback.classList.add("incorrect");
    feedback.classList.remove("correct");

    timer -= 10;

  }

  feedback.style.display = "block";

  currentQuestion++;

  if (currentQuestion === questions.length) {
    endQuiz();
  } else {
    setTimeout(displayQuestion, 1000);
  }
}


function endQuiz() {

  clearInterval(intervalId);

  const questions = document.querySelector("#questions");
  questions.style.display = "none";

  const endScreen = document.querySelector("#end-screen");
  endScreen.style.display = "block";

  finalScore.textContent = score;

  saveScore();
}


function saveScore() {

  const initials = document.querySelector("#initials").value;

  const newScore = {
    initials: initials,
    score: score
  };

  let scores = localStorage.getItem("scores");

  if (scores === null) {
    scores = [];
  } else {
    scores = JSON.parse(scores);
  }

  scores.push(newScore);

  localStorage.setItem("scores", JSON.stringify(scores));
}