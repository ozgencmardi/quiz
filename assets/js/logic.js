let currentQuestion = 0;
let score = 0;
let timer = 0;
let intervalId = 0;


const questionTitle = document.querySelector("#question-title");
const choices = document.querySelector("#choices");
const feedback = document.querySelector("#feedback");
const finalScore = document.querySelector("#final-score");
const submitBtn = document.getElementById("submit");
const initialElement = document.getElementById("initials");

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

    const correctSound = new Audio("assets/sfx/correct.wav");
    correctSound.play();

    score++;

  } else {

    feedback.textContent = "Incorrect!";
    feedback.classList.add("incorrect");
    feedback.classList.remove("correct");

    const incorrectSound = new Audio("assets/sfx/incorrect.wav");
    incorrectSound.play();

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

  finalScore.textContent = timer;

  //saveScore();
}

/*
function saveScore() {
  let initials = initialElement.value.trim();
  console.log(initials);

  if (initials !== ""){
      let highScores = JSON.parse(localStorage.getItem("highscores")) || [];
      let newScore = {
          score: time,
          initials: initials
      }
      highScores.push(newScore);
      localStorage.setItem("highscores", JSON.stringify(highScores));
      window.location.href = "highscores.html";
  }
}

function checkEnter(event) {
  if(event.key === "Enter") {
      saveScore();
  }
}

submitBtn.addEventListener("click", saveScore);
initialElement.addEventListener("keyup", checkEnter);

*/


function saveScore() {
  
  //const initials = document.querySelector("#initials").value;
  const initials = initialElement.value.trim();
  //console.log(initials);

  if (initials !== ""){

    let scores = JSON.parse(localStorage.getItem("scores")) || [];

    const newScore = {
      initials: initials,
      score: timer
    };
    
    scores.push(newScore);
    localStorage.setItem("scores", JSON.stringify(scores));
    window.location.href = "highscores.html";
  }

}

function checkEnter(event) {
  if(event.key === "Enter") {
      saveScore();
  }
}

  submitBtn.addEventListener("click", saveScore);
  initialElement.addEventListener("keyup", checkEnter); 

