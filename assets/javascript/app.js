let timeLeft;
let intervalId;
let time = 5;
var radioValue;
var graded = false;

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

function decrement() {
    if (time > 0) {
        time--;
        $("#onscreenTimer").html(time);
    } else {
        grade();
    }
}

function grade() {
    if (graded === false) {
        radioValue = $("input[name='question1']:checked").val();
        console.log(radioValue);
        if (radioValue === "correct"){
            console.log("Correct");
        } else {
            console.log("Incorrect");
        }
    }
    graded = true;
}