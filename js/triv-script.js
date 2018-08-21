
// initialize variables
var correct, incor, response, qnum, selected, subject, fifty, friend;
var quiz = []; 
var quizes = [HIST01, HIST02, HIST03, HIST04, HIST05, HIST06];
const NUMBERQUESTIONS = 10;


var multChoices = $("#listed dt");
$("#listed dt").on("click", function () {
    processChoice($(this),this.id);
}); 

// var n1 = document.getElementsByClassName("ans");
// var apre = document.querySelectorAll("div#tabs dt");
var score = $("#tabs dt");

$(".quiz").hide();
$(".quiz_summary").hide();
// add event listeners for player's answers
// var choices = document.getElementsByClassName("ans");
// for (i = 0; i < choices.length; i++) {
//     var chc = i;
//     choices[i].addEventListener("click", function(){ myxFunction(this, this.id)
// });
// }

// add event listeners for starting the quiz
$(".quiz_list a").on("click", function(event) {
    event.preventDefault();
    // $(".quiz_intro").addClass("hide");
    // $(".quiz").removeClass("hide");
    $(".quiz_intro").hide();
    $(".quiz").fadeIn();
    starter(this.id);
});

// add event listener for "next" click
// document.getElementById("next").addEventListener("click", loadQuestion);
$("#next").on("click", function(event) {
    event.preventDefault();
    loadQuestion();
});

$("#quiz_list").on("click", function() {
    // $(".quiz_summary, .quiz").addClass("hide");
    // $(".quiz_intro").removeClass("hide");
    $(".quiz_summary").hide();
    $(".quiz_intro").fadeIn();
});

// Execute the initial function to load the 1st question + listeners ...
//window.onload = starter();
function starter(id) {
    // set the variable values
    quiz = quizes[id];
    fifty = true, friend = true;
    correct = 0, incor = 0, response = "active", qnum = -1, selected = true, subject = "History";
    // run loadQuestion for the 1st quesiton
    $(".fiftyFifty span").html("Take away 2 wrong choices. 1 per quiz.");
    $(".friend").html("Friendly advice from Sumiko. 1/quiz.");
    loadQuestion();
}

// Load the next question 
function loadQuestion() {
        // reset the quesiton related variables
        if (selected != true) {
        alert("You must select an answer first");
        return;
    }
    selected = false;
    $(".questions").hide();
    qnum++;
    response = "active";
    if (qnum == NUMBERQUESTIONS) {
        endQuiz();
        return;
    }

    // load the new question
    var thisquest = subject + " Question Number " + (qnum+1);
    $("#q_wrap").html(quiz[qnum].question);

    // Reset the style
    multChoicesLength = multChoices.length;
    var i;
    for ( i=0; i < multChoicesLength; i++) {
        $(multChoices).removeClass("ans_correct ans_chosen crossed");
    }
    // $("#listed dt").removeClass("ans_correct ans_chosen crossed");
    $(".friend_text").html("");

    // reload the 4 choices
    multChoices[0].innerHTML = quiz[qnum].a;
    multChoices[1].innerHTML = quiz[qnum].b;
    multChoices[2].innerHTML = quiz[qnum].c;
    multChoices[3].innerHTML = quiz[qnum].d;

    // display the new questions
    $(".questions").fadeIn(1000);
} 

// Process players choice to the question
function processChoice(choice, clicked) {
    
    console.log("this " + choice + " $(this.id) " + clicked + "choice ")
    if (response == "inactive") return;
    response = "inactive" ;

    // Tally the correct or incorrect response and write to div
    if (clicked == quiz[qnum].ans) {
        correct++;
    } else {
        incor++;
    }
    updateScore();
    selected = true;

    // update style for clicked and correct answer
    // clicked.style.backgroundColor = "yellow";
    $(choice).addClass("ans_chosen");
    var choice2 = "#" + quiz[qnum].ans;
    $(choice2).addClass("ans_correct");
    // xyz = document.getElementById(choice2);
    // xyz.classList.add("ans_correct");
} 

function endQuiz() {
    // $(".quiz").addClass("hide");
    $(".quiz").hide();
    var score = ((correct / NUMBERQUESTIONS) * 100);
    correct = 0, incor = 0;
    updateScore();

    var statement = "Your final score is " + score + " Pct";
    var imgArray = ["images/albert-einstein-1505932669R3h.jpg", 
    "images/12657887233_a5d01ac45b_z.jpg", 
    "images/albert-einstein-11282050865o83h.jpg", 
    "images/13475432443_d3c042abd5_z.jpg", "images/albert-einstein-784078_640.jpg"];
    var imgTitleArray = ["publicdomainpictures.net/en/view-image.php?image=228060&picture=albert-einstein",
    "flickr.com/photos/donkeyhotey/12657887233",
    "publicdomainpictures.net/en/view-image.php?image=8612&picture=albert-einstein",
    "flickr.com/photos/huanjo/13475432443", "pixabay.com/en/albert-einstein-portrait-person-784078/"];
    // https://www.publicdomainpictures.net/en/view-image.php?image=228060&picture=albert-einstein
    // https://www.flickr.com/photos/huanjo/13475432443
    // https://pixabay.com/en/albert-einstein-portrait-person-784078/
    // https://www.publicdomainpictures.net/en/view-image.php?image=8612&picture=albert-einstein
    // https://www.flickr.com/photos/donkeyhotey/12657887233

    var imgDisplay;
    switch (score) {
        case 100:
        case 90:
            imgDisplay = imgArray[4];
            imgTitle = imgTitleArray[4];
            break;
        case 80:
            imgDisplay = imgArray[3];
            imgTitle = imgTitleArray[3];
            break;
        case 70:
            imgDisplay = imgArray[2];
            imgTitle = imgTitleArray[2];
            break;
        case 60:
            imgDisplay = imgArray[1];
            imgTitle = imgTitleArray[1];
            break;
        default:
            imgDisplay = imgArray[0];
            imgTitle = imgTitleArray[0];
    }

    $("#finalImage").attr("src", imgDisplay);
    $("#finalImage").attr("title", imgTitle);
    $("#final").html(statement);
    // $(".quiz_summary").removeClass("hide");
    $(".quiz_summary").fadeIn(1000);
}

function updateScore() {
    score[0].innerHTML = "correct:&nbsp" + correct;
    score[1].innerHTML = "wrong:&nbsp;&nbsp" + incor;
}

// add event listeners for starting the quiz
$(".fiftyFifty button").on("click", function(event) {
    if (fifty == false) return;
    event.preventDefault();
    var cAns   = quiz[qnum].ans;
    var rand   = Math.floor(Math.random() * Math.floor(3));
    var remove = [0,1,2,3];
    var cut    = remove.splice(cAns, 1);
    cut        = remove.splice(rand, 1);
    for (i=0; i < remove.length; i++) {
        $(multChoices[remove[i]]).addClass("crossed");
        // multChoices[remove[i]].classList.add("crossed");
    }
    fifty = false;
    $(".fiftyFifty span").html("this helper expired for this quiz");
});

// add event listeners for starting the quiz
$(".askFriend button").on("click", function(event) {
    if (friend == false) return;
    event.preventDefault();

    // execute random chance 
    var pcts           = [25,50,75,90];
    var remove       = ["a","b","c","d"];
    var retain       = ["a","b","c","d"];
    var cut          = remove.splice(quiz[qnum].ans, 1);
    var rand         = Math.floor(Math.random() * Math.floor(3));
    var rand2        = Math.floor(Math.random() * Math.floor(4)); 
    var threshhold1  = pcts[rand2];
    var randomNumber = (Math.random() * 100);
    var msg          = "\"I am " + threshhold1 + "% certain it's "
    if (randomNumber < threshhold1) {
        msg = msg + retain[quiz[qnum].ans] + "."
        } else {
        msg = msg + remove[rand] + ".\"";
    }
    friend = false;
    $(".friend").html("This helper expired for this quiz");
    $(".friend_text").html(msg);
});