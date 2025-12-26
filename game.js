var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

$(".btn").click(function () {
    if(this.classList.contains('start')) return
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});

function nextSequence() {
  level++;
  $("h1").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

for(let i=0;i<gamePattern.length;i++){
  setTimeout(function(){
  $("#" +gamePattern[i])
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

     playSound( gamePattern[i]);
  animatePress( gamePattern[i]);},600 * i)
  } 
 
 
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("." + currentColor).addClass("pressed");

  setTimeout(function () {
    $("." + currentColor).removeClass("pressed");
  }, 100);
}

let level = 0;
let ifStarted = false;
$(document).keydown(function (event) {
  if (!ifStarted && (event.key === "a"||event.key === "а")) {
    ifStarted = true;
    $("h1").text("Level " + level);
    nextSequence();
  }
});

$(".start").click(function () {
  if (!ifStarted) {
    ifStarted = true;
    $("h1").text("Level " + level);
    nextSequence();
     $(this).addClass("pressed");
    setTimeout(() => {
      $(this).removeClass("pressed");
    }, 200);
  }
});

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        userClickedPattern = [];
        nextSequence();
      }, 1000);
    }
  } else {
    $("h1").text("Game Over, Press A to Restart");

    let wrong = new Audio("sounds/wrong.mp3");
    wrong.play();
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    startOver();
  }
}

function startOver() {
  ifStarted = false;
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
}