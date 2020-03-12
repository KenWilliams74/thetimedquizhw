var secondsLeft = 75;
var currentQuestion = 0;


var myQuestions = [
	{
		question: "What is 2 + 2?",
		answers: [
			"4",
			"10",
			"1200"
		],
		correctAnswer: "4"
	},
	{
		question: "What is 4 + 4?",
		answers: [
			"0",
			"8",
			"16"
		],
		correctAnswer: "8"
	}
];


function displayQuestion() {
	var question = document.getElementById("theQuiz");
	question.textContent = myQuestions[currentQuestion].question
	var a = document.getElementById("a");
	a.textContent = myQuestions[currentQuestion].answers[0]
	var b = document.getElementById("b");
	b.textContent = myQuestions[currentQuestion].answers[1]
	var c = document.getElementById("c");
	c.textContent = myQuestions[currentQuestion].answers[2]
}

displayQuestion();
setTime();


function changeQuestion() {

	for (i = 0; i < myQuestions.length; i++) {
		if(answers === correctAnswer)
	}
}

function choiceButton() {
	document.getElementById("result").innerHTML = "Correct!";
}

function setTime() {
	var timerInterval = setInterval(function () {
		var theTime = document.getElementById("timer");
		theTime.textContent = secondsLeft;
		secondsLeft--;
		theTime.textContent = secondsLeft + " seconds left";

		if (secondsLeft === 0) {
			clearInterval(timerInterval);
			alert("GAME OVER");
		}

	}, 1000);
}