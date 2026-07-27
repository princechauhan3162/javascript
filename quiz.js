var quiz = [
  {
    question: "1. What is the capital of India?",
    options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
    answer: 1,
  },
  {
    question: "2. HTML stands for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool Markup Language",
      "Home Text Markup Language",
    ],
    answer: 0,
  },
  {
    question: "3. Which language is used for styling?",
    options: ["HTML", "CSS", "Java", "Python"],
    answer: 1,
  },
  {
    question: "4. JavaScript is used for?",
    options: [
      "Styling",
      "Database",
      "Making website interactive",
      "Operating System",
    ],
    answer: 2,
  },
];

var currentQuestion = 0;
var score = 0;
var result = [];

window.onload = function () {
  loadQuestion();
};

function loadQuestion() {
  document.getElementById("question").innerHTML =
    quiz[currentQuestion].question;
  document.getElementById("btn0").innerHTML = quiz[currentQuestion].options[0];
  document.getElementById("btn1").innerHTML = quiz[currentQuestion].options[1];
  document.getElementById("btn2").innerHTML = quiz[currentQuestion].options[2];
  document.getElementById("btn3").innerHTML = quiz[currentQuestion].options[3];
}

function checkAnswer(option) {
  if (option == quiz[currentQuestion].answer) {
    score++;
    result.push("Question " + (currentQuestion + 1) + " : True");
  } else {
    result.push("Question " + (currentQuestion + 1) + " : False");
  }
  currentQuestion++;
  if (currentQuestion < quiz.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("question").innerHTML = "<h3>Quiz Completed</h3>";
  document.getElementById("btn0").style.display = "none";
  document.getElementById("btn1").style.display = "none";
  document.getElementById("btn2").style.display = "none";
  document.getElementById("btn3").style.display = "none";

  var text = "";

  for (var i = 0; i < result.length; i++) {
    text += result[i] + "<br>";
  }

  text += "<br><h4>Your Score: " + score + " / " + quiz.length + "</h4>";
  document.getElementById("score").innerHTML = text;
}