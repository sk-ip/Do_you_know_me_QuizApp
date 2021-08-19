const readlineSync = require("readline-sync");

var username = readlineSync.question("What is your name: ");
var score = 0;

console.log("Welcome "+ username + "!! to Do you know Sudhanshu ");

function play(question, answer) {

  var userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("correct!");
    score += 1;
  } else {
    console.log("wrong!");
    score -= 1;
  }

  console.log("current score: "+ score);
  console.log("---------------------");
}

// questions

questions = [
  {
    question: "What is my name? ",
    answer: "Sudhanshu",
  },
  {
    question: "Where do i live? ",
    answer: "Mumbai",
  },
  {
    question: "My superhero? ",
    answer: "Batman",
  },
  {
    question: "My hobby? ",
    answer: "Reading",
  },
  {
    question: "My job? ",
    answer: "programming",
  },
]

// loop
for (i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
};

// final score
console.log("YOUR FINAL SCORE: "+score);