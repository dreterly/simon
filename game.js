<<<<<<< HEAD

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

 
  playSound(userChosenColour);
 animatePress(userChosenColour);

 checkAnswer(userClickedPattern.length-1)
});

function nextSequence() {

    level++;
  $("h1").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  
  playSound(randomChosenColour);
  animatePress(randomChosenColour)
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

let level=0;
let ifStarted=false;
$(document).keydown(function (event) {
  if (!ifStarted && event.key === "a") {
    ifStarted = true;
    $("h1").text("Level " + level);
    nextSequence();
  }
});

function checkAnswer(currentLevel){
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        userClickedPattern = [];
        nextSequence();
      }, 1000);
    }

  }  else {
    $("h1").text("Game Over, Press A to Restart");
  
    let wrong=new Audio("sounds/wrong.mp3");
    wrong.play();
   $("body").addClass("game-over");
   setTimeout(function(){
       $("body").removeClass("game-over");
   },200)
   startOver()
  }
}

function startOver() {
 ifStarted = false;
    level = 0;
    gamePattern = [];
    userClickedPattern=[];

}
=======

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

 
  playSound(userChosenColour);
 animatePress(userChosenColour);
});

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  
  playSound(randomChosenColour);
  animatePress(andomChosenColour)
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

let level=0;
$(document).keydown(function(event){
   
    if(event.key=='a'){
        $("h1").text("Level "+level)
    } 
    nextSequence()
})
>>>>>>> 62cf94246f778bed8e6687247bbc75000a26ba70
