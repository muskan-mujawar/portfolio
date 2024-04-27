var buttonColours=["red", "blue", "green", "yellow"];

var gamePattern =[];

var userClickedPattern =[];


$(".btn").click(function(){
    var userChosenColour=$(this).attr("id");

    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour)

   
   
    //console.log(userClickedPattern);
    animatePress(userChosenColour)
})
  


function nextSequence()
{
    var randomNumber=Math.random();
    randomNumber=randomNumber*4;
    randomNumber=Math.floor(randomNumber);
   // return randomNumber;
   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
   var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
   audio.play();
}

var randomChosenColour = buttoncolours[nextSequence()];

gamePattern.push(randomChosenColour);



function playSound(color){
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();   
}

function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");

    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
      
}, 10); 
}

