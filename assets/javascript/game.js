var targetScore;
var greenScore;
var blueScore;
var yellowScore;
var redScore;
var totalScore = 0;
var wins = 0;
var losses = 0;
setTargetScore19_120();

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function checkGameEnd(){
    if (totalScore >= targetScore) {
        if (totalScore > targetScore)
        {
            ++losses;
            $("#losses").text(losses);

        } else {
            ++wins;
            $("#wins").text(wins);
        }
        setTargetScore19_120();
    }  
}
function printCurrentTotalScore() {
  $("#divScore").text(totalScore);
}

function addRed() {
  totalScore = totalScore + redScore;
  printCurrentTotalScore();
  checkGameEnd();
}
function addYellow() {
  totalScore = totalScore + yellowScore;
  printCurrentTotalScore();
  checkGameEnd();

}
function addBlue() {
  totalScore = totalScore + blueScore;
  printCurrentTotalScore();
  checkGameEnd();

}
function addGreen() {
  totalScore = totalScore + greenScore;
  printCurrentTotalScore();
  checkGameEnd();

}

function setTargetScore19_120() {
  totalScore = 0;
  $("#divScore").text(totalScore);
  targetScore = getRandomInt(19, 120);
  $("#targetScore").text(targetScore);

  greenScore = getRandomInt(1, 12);
  blueScore = getRandomInt(1, 12);
  redScore = getRandomInt(1, 12);
  yellowScore = getRandomInt(1, 12);
  console.log("Red" + redScore);
  console.log("Target" + targetScore);
}

// 1) set target score  (random number)
// 2) set target random number for each crystal
// 3  Ask user to click until score >= target score
// in each iteration: increment total score by the selectec crystal