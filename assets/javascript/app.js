// Hides the questions until the start button is clicked
$("#questionsContainer").hide();

var answer =
    ["Denver", "Bananas", "Denver Broncos", "H20", "Abe Lincoln"]
    
// Timer Object
var intervalId;
var counter = 0;
var score = 0;
var number = 30;
var qcount = 0;

function run() {
    clearInterval(intervalId);
    number = 30;
    intervalId = setInterval(decrement, 1000);
}
function decrement() {

    //  Decrease number by one.
    number--;

    //  Show the number in the #show-number tag.
    $("#timeLeft").html("<h2>" + number + "</h2>");


    //  Once number hits zero...
    if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");
        resultsDisplay();
    }
}

// This initializes the start button to start the game
$(".startGame").on("click", function () {

    // This event starts the timer and sets the amount of time the user has to play the game
    // timer = 30,
    console.log("start")
    //        $("#questionsContainer").display();
    $("#questionsContainer").show();
    $(".startGame").hide();
    $(".results").text("");
    run();
});
// this is an array of objects that holds all of the questions, answers and the index of the correct answer for each question

$("#gamecontent").on("click", "input", function () {
    $(".message").text("");
    var qno = $(this).attr('name');
    var optionval = $(this).val();
    console.log(" qno option ", qno, optionval);
    if (answer[qno] == optionval) {
        score++
        console.log("Score", score);
        qcount++;
    }
    else {
        qcount++;
        $(".message").text("The Right answer: " + answer[qno])
    }
    if (qcount == 5) {
        resultsDisplay();
    }

});

function resultsDisplay() {
    $("#questionsContainer").hide();
    $(".startGame").show();
    $(".results").append("<p>Score :" + score + "</p>");
    clearInterval(intervalId);
    $("#timeLeft").text("");
    score = 0;
    // $("input[name=0]").removeAttr('checked',false);
    $("input[type=radio]").prop('checked', false);
}