let timeLeft;
let intervalId;
let time = 10;

$(document).ready(function(){
    $("#start").on("click", function(){
        console.log("I was clicked.");
        $("#startScreen").addClass("disappear");
        $("#quiz").removeClass("disappear");
        clock();
    });
});

function clock() {
    intervalId = setInterval(decrement, 1000);
}

function decrement () {
    if (time > 0) {
    time--;
    $("#onscreenTimer").html(time);
    }
}