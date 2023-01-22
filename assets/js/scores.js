const highscores = document.querySelector("#highscores");
const clearButton = document.querySelector("#clear");

loadScores();

clearButton.addEventListener("click", clearScores);


function clearScores() {
  localStorage.removeItem("scores");
  highscores.innerHTML = "";
}


function loadScores() {

  let scores = localStorage.getItem("scores");

  if (scores === null) {
    scores = [];
  } else {
    scores = JSON.parse(scores);
  }

  scores.sort((a, b) => b.score - a.score);

  scores.forEach(function(score) {
    const li = document.createElement("li");
    li.textContent = score.initials + " - " + score.score;
    highscores.appendChild(li);
  });
}
