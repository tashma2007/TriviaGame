//$(document).ready( = {

var timer = 30;
var correctAnswer = 0;
var incorrectAnswer = 0;
var questionNumber = 0;

var questionsArray = [
    {
        question: "Who are Jon Snow's parents?",
        answerChoices: ["Ned Stark  and Catelyn Stark", "Rhaegar Targaryen and Lyanna Stark", "Rob Stark and Cersei Lannister", "no one knows"],
        answer: "Rhaegar Targaryen and Lyanna Stark",
    },
    {
        question: "How many dire wolf pups were found and given to the Stark children?",
        answerChoices: ["6", "2", "5", "8"],
        answer: "6",
    },
    {
        question: "How many titles does Daenerys Targaryen hold?",
        answerChoices: ["6", "2", "5", "7"],
        answer: "7",
    },
    {
        question: "What was the name of Arya Stark's dire wolf?",
        answerChoices: ["Nymeria", "Ghost", "Lady", "Summer"],
        answer: "Nymeria",
    },
    {
        question: "What is the name of Sansa Stark's first husband?",
        answerChoices: ["Ramsay Bolton", "Joffrey Baratheon", "Tyrion Lannister", "Loras Tyrell"],
        answer: "Tyrion Lannister",
    },
    {
        question: "What did Arya serve Walder Frey before she killed him?",
        answerChoices: ["wine", "his sons cooked in a meat pie", "his wife and unborn child in a casserole", "roasted pheasant"],
        answer: "his sons cooked in a meat pie",
    },
    {
        question: "The massacre that was arranged by Lord Walder Frey to kill King Rob Stark's party which included Rob Stark's wife (and unborn child) and his mother, Catelyn Stark, was later known as?",
        answerChoices: ["The Purple Wedding", "The Massacre at The Freys", "The Red Wedding", "Death of Hospitality"],
        answer: "The Red Wedding",
    }
]

function decrease() {
    timer--;
    $("#time").text(`Time Remaining: ${timer} Seconds`);
    if (timer === 0) {
        //  timeForResult(false, questionNumber);
    }
}


$("#startButton").on("click", function () {
   // console.log('hello');
    $("#start").hide();
    game.startButton();
})

$(document).on("click", ".answerButton", function () {
    var j = parseInt($(this).val());
    var chosenAnswer = questionsArray[questionNumber].answerChoices[j];
    var answer = questionsArray[questionNumber].answer;
    //  timeForResult(chosenanswer, questionNumber)
//    console.log(answer);

    if (chosenAnswer === answer){
        correctAnswer++
        questionNumber++ 
        game(questionNumber)
    
    }

//    else if (chosenAnswer)
})
function game(input) {
questionNumber = input;
    $(".questionsDisplay").empty();
    var timeLeft = 10;
    $(".questionsDisplay").append(`<h3 id="time">Time Remaining: ${timeLeft} Seconds</h3>`);

    var timerid = setInterval(decrease, 1000);


    $(".questionsDisplay").append(`<h3 id="question">${questionsArray[questionNumber].question}</h3>`);
    for (var i = 0; i < 4; i++) {
        $(".questionsDisplay").append(`<button class="answerButton" value="${i}" >${questionsArray[questionNumber].answerChoices[i]}</button>`);
    }






}







