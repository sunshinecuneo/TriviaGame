// // Initialize the .js document as soon as the page is loaded
$(document).ready(function() {

    // this object holds all of the questions, answers and the index of the correct answer for each question
    var game = 
        [
            {
                question: "What is the capital of Denver?",
                choices: ["Golden", "Aurora", "Denver", "Colorado Springs"],
                id: "questionOne",
                answer: 3
            }, {
                question: "What is the top selling item at Walmart?",
                choices: ["Gum", "Candy", "Toilet Paper", "Bananas"],
                id: "questionTwo",
                answer: 4
            }, {
                question: "Which NFL team won Super Bowl 50 in 2015?",
                choices: ["New England Patriots", "Denver Broncos", "Miami Dolphins", "Seattle Seahawks"],
                id: "questionThree",
                answer: 2
            }, {
                question: "Which element is most common in the human body?",
                choices: ["Carbon", "Hydrogen", "H2O", "Oxygen"],
                id: "questionFour",
                answer: 3,
            }, {
                question: "Who was the 16th president of the United States?",
                choices: ["Abe Lincoln", "George Washington", "Thomas Jefferson", "Andrew Johnson"],
                id: "questionFive",
                answer: 1,
            }
        ]
    
    var time;
    $(".wrapper").hide
    // This initializes the start button to start the game
    $("startGame").on("click", function () {

        // When the start button is clicked the div with the questions that was hidden is shown
        $(".wrapper").show();
        console.log("Hello");
        // This events start the timer and sets the amount of time the user has to play the game
        time = 30;
         run();
       // $(this).hide();

    });

    
    

    // This function enables the number of seconds to decrease by one and displays it to the page until time is up
    function decrement() {
        // Decreases the number by one 
        time--;
        // Shows on the page the time remaining in the timer div
        $("#timeLeft").html("<h2>" + time + " seconds" + "</h2>");
        // When the number is equal to zero run the stop function
        if (time === 0) {
            stop();

            // Alert the user that time is up by writing to the html in the timesUpMessage div
            $("#message").html("Times Up!");
            checkAnswers();
        }
    }

    // The run function sets each decrement equal to a second 
    function run() {
        counter = setInterval(decrement, 1000);
        $("#timeLeft").text(counter)
    }

    // The stop function
    function stop() {
        // Clears the counter interval
        clearInterval(counter);
    }

    // Calls for the run fuction
    run();

    // Function to create the inputs needed for the form 
    // and relates them to the items held in the game object
    function formTemplate(data) {
    
    // Variable to relate the form field for each question
    // with the data in the object for each question so 
    // that the questions can be input into that form field
    var questions = "form id = questionOne" + data.question;

    // Variable to access the question objects possible answers array needed to answer each question
    var choices = data.choices;
    
    // For loop to loop through the choices array for each question to add
    // the values of each choice array and using 'questions' add them as 
    // radio buttons to the associated question
    for (var i = 0; i < choices.length; i++) {
        var choice = choices[i];
        console.log(choice);
        // *******Does my radio button go here??*******
        // < input type = "radio" id = "myRadio" ></input>

    }
    }

    // Function to check the users results
    function checkAnswers() {

        // Variables needed to hold the results
        var results = "";
        var guessedAnswers = [];
        var correct = 0;
        var incorrect = 0;
        var unAnswered = 0;

        // For loop loops through questions at each index first into
        // the isCorrect function to see if they match the correct answers
        // and if they do, increments the correct score up by one
        for (var i = 0; i < game.questions.length; i++) {
            if (isCorrect(game.questions[i])) {
                correct++;
            } else {
                // If not correct, determines whether the user clicked the wrong answer
                // or didn't click an answer at all so that incorrect and unAnswered
                // scores can be updated accordingly
                if (checkedAnswers(game.questions[i])) {
                    incorrect++;
                } else {
                    unAnswered++;
                }
            }
        }
    }

    // Function that checks whether the user clicked for each of the questions
    function checkedAnswers(question) {
        var anyAnswered = false;
        var answers = $("name" + question.id + "]");

        // For loop creates a condition to check if the buttons were clicked
        // and sets the anyAnswered variable to true if they were
        for (var i = 0; i < answers.length; i++) {
            if(answers[i].checked) {
                anyAnswered = true;
            }
        }
        return anyAnswered;
    // 
    }

    // Return the anyAnswered variable to distinguish between incorrect answers
    // and unanswered questions
    

    // Create a click function event for the doneButton that checks the answers
    // and stops the clock when the done button is clicked
    $("#doneButton").on("click", function() {
        checkAnswers();
        stop();
        $("#timesUpMessage").html("Game Over!");
    })

});

// **********NEEDS FIXING**********
    // Need to define anyAnswered*******
    // StartAND Done button is not functioning
    // Timer starts as soon as the page loads - not when the start button is clicked
    // My questions are not hidden when the page is first loaded



    // Need to create the radio buttons for each question with the various chioces
    // Need to establish right/wrong answers
    // Need to create the dispaly of users results compared to the correct answers 



    // Radio Buttons
    // < input type = "radio" id = "myRadio" ></input>


//============
// 1. you have an array game of json objects Line 5- Line33
// 2. Start click event
//  -  You start the timer
// - you display the One question  and options
//3. When the user selects an option
//    - Check for the answer
//        - Right (Increse score)
//        - Wrong (display it is wrong)
//        -- Check whether it is end of the question
//             -- if not go to next question
//             -- if it  is last question, display the result (along with time taken) and reset the timer
//