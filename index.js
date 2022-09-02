var readlineSync = require('readline-sync');
var userName = readlineSync.question("Hey there! Can you tell us your Name? " )
console.log("Welcome! " + userName + " let's play 'Big Bang Theory Trivia'")
var score = 0;

function qna(question, answer){
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("You're Right!");
    score = score + 1;
  } else {
    console.log("You're Wrong!");
  }

  console.log("Your score: " + score);
}

questionOne = {
  question: "How many seasons of 'The Big Bang Theory' are there? ",
  answer: "12",
}

questionTwo = {
  question: "What state is Sheldon originally from? ",
  answer: "Texas",
}

questionThree = {
  question: "What restaurant does Penny work at for a large part of the series? ",
  answer: "The Cheesecake Factory",
}

questionFour = {
  question: "Where do Sheldon, Amy, Raj, Howard, and Leonard work?  ",
  answer: "Caltech",
}

questionFive = {
  question: "What is Howard allergic to? ",
  answer: "Nuts",
}

questionSix = {
  question: "What is Raj's sister's name? ",
  answer: "Priya",
}


var quiz = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix]

for (i=0; i < quiz.length; i++){
  var currentq = quiz[i];
  qna(currentq.question, currentq.answer);
}

