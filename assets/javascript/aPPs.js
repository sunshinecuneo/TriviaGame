// Initializes the document and hides the question form until the start button is clicked
// $(document).ready(function () {
    $("#questionsContainer").hide();
    var answer =
    ["Denver", "Bananas", "Denver Broncos", "H20", "Abe Lincoln"]
    // Timer Object
    var intervalId ;  
    var counter =0;
    var score =0;
    var number =30;
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
$(".startGame").on("click", function() {

    // This event starts the timer and sets the amount of time the user has to play the game
        // timer = 30,
        console.log("start")
//        $("#questionsContainer").display();
        $("#questionsContainer").show();
        $(".results").text("");        
        run();
    }) ; 
    // this is an array of objects that holds all of the questions, answers and the index of the correct answer for each question
    
    $("#gamecontent").on("click","input",function(){
        $(".message").text("");
        var qno = $(this).attr('name');
        var optionval = $(this).val();
        console.log(" qno option ",qno,optionval);
        if(answer[qno] == optionval)
        {
            score++
            console.log("Score",score);
            qcount++;
        }
        else{
            qcount++;
            $(".message").text("The Right answer: "+ answer[qno])
        }
        if (qcount == 5){
            resultsDisplay();
        } else {
            
        }

    });

    function resultsDisplay(){
        $("#questionsContainer").hide();
        $(".results").append("<p>Score :"+score+"</p>") ; 
        clearInterval(intervalId);
        $("#timeLeft").text("");
        score =0;
        $("input[name=0]").attr('checked',false);
        $("input[type=radio]").attr('checked',false);
    }
    // ****Do I need a game over function here?****
    
    // function checkAnswers() {
    //     // how do I write the checkAnswers function?
    // }
    // function run() {
    //     // Need to define the function
    //     counter = setInterval(decrement, 1000);
    //     $("#timeLeft").text(counter)
    // }
    // // This function enables the number of seconds to decrease by one and displays it to the page until time is up
    // function decrement() {
    //     // Decreases the number by one 
    //     time--;
    //     // Shows on the page the time remaining in the timer div
    //     $("#timeLeft").html("<h2>" + time + " seconds" + "</h2>");
    //     // When the number is equal to zero run the stop function
    //     if (time === 0) {
    //         stop();
    //         checkAnswers();
    //     }
    // }
    
    // // The stop function
    // function stop() {
    //     // Clears the counter interval
    //     clearInterval(counter);
    //     // What else do I need in the stop function??
    // }
    
    // function checkAnswer() {
    //     // Need to write the check answer function
    // }
    // // Alert the user that time is up by writing to the html in the timesUpMessage div
    // $("#message").html("Times Up!");
    // checkAnswers();
    
    
    











// Click start <-------DONE
// Timer starts counting down and the questions/answers show up on the page
// Timer counts down from 30 seconds
// Timer needs to stop when === zero
// Done button also stops timer, triggers checkAnswer function, update user score
    // Need to have access to the users answer choice
    // Need to compare that to the correct answer
    // Count score and display it - change text color of correct answer to green (in CSS)
// When timer is === zero the question radios need to be inactive

// Generate questions and answers
// Loop through the game array
// Create each question and radio answers
    // lookup
// For each radio set value of radio and give it a unique key




