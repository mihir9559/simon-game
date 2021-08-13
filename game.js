var colors = ["green", "red", "yellow", "blue"];
var seq = [];
var user = [];
// flag = true;

/*
function randomColor() {
    var r = Math.floor(Math.random() * 4);
    var col = colors[r];
    return col;
}
var n;
var currentKey;

function playGame() {
    // var t=5;
    while (true) {
        var col = randomColor();
        animatePress(col);
        seq.push(col);
        // alert(col);
        console.log(seq);
        // animatePress(col);
        len = seq.length;
        console.log("length of seq is " + len);
        var i;
        i = 0;
        while (i < len) {
            var userChosenColour = null;
            var isButtonPressed = false;
            if (!isButtonPressed) {
                $(".box").click(function () {
                    userChosenColour = $(this).attr("id");
                    animatePress(userChosenColour);
                    console.log("user clicked " + userChosenColour);
                    isButtonPressed = true;
                });
            }
            console.log("userChosenColour is " + userChosenColour);
            if (userChosenColour !== seq[i]) {
                flag = false;
                break;
            }
        }
        if (flag === false) {
            break;
        } else {
            level = level + 1;
            $("h1")[0].innerHTML = "Level " + level;
        }
        // t=t-1;
    }
    gameOver();
}
$(".newGame").click(function () {
    // var seq = [];
    // var user = [];
    console.log("new game clicked");
    var level = 1;
    // var count = 0;
    // document.getElementsByTagName("h1")[0].innerHTML="Level "+level;
    $("h1")[0].innerHTML = "Level " + level;
    playGame();
});

function gameOver() {
    $("body").addClass("game-over");
    setTimeout(function () {
        $("body").removeClass("game-over");
    }, 100);
    seq.splice(0, seq.length);
    $("h1")[0].innerHTML = "Game Over <br> Press New Game to restart";
    level = 1;
}

// $(".box").click(function () {
//     var userChosenColour = $(this).attr("id");
//     animatePress(userChosenColour);

// });*/


function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

var randomChosenColour;
var i;
var level;

$(".newGame").click(function () {
    // var seq = [];
    // var user = [];
    console.log("new game clicked");
    level = 1;
    // var count = 0;
    // document.getElementsByTagName("h1")[0].innerHTML="Level "+level;
    $("h1")[0].innerHTML = "Level " + level;
    nextSequence();
});

function nextSequence() {
    var r = Math.floor(Math.random() * 4);
    // console.log("r is "+r);
    // console.log("colors[r] is "+colors[r]);
    randomChosenColour = colors[r];
    console.log("randomChosenColor is "+randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    seq.push(randomChosenColour);
    console.log(seq);
    i=0;
}

$(".box").click(function(){
    var userChosenColour = $(this).attr("id");
    console.log("userChosenColour is "+userChosenColour);
    animatePress(userChosenColour);
    makeSound(userChosenColour);
    if(userChosenColour===seq[i])
    {
        if(i===(seq.length-1))
        {
            level=level+1;
            $("h1")[0].innerHTML = "Level " + level;
            nextSequence();
        }
        else{
            i=i+1;
        }
    }
    else{
        gameOver();
    }
});

function gameOver() {
    var beep=new Audio("sounds/wrong.mp3");
    beep.play();
    $("body").addClass("game-over");
    setTimeout(function () {
        $("body").removeClass("game-over");
    }, 100);
    seq.splice(0, seq.length);
    $("h1")[0].innerHTML = "Game Over <br> Press New Game to restart";
    level = 1;
    i=0;
}

function makeSound(c) {
    var audio = new Audio("sounds/" + c + ".mp3");
  audio.play();
}