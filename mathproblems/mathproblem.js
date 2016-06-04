var a = 0;
var b = 0;

var generateProblem = function () {
	a = Math.floor(Math.random() * 100);
	b = Math.floor(Math.random() * 100)
	var $spanA = $("#a");
	var $spanB = $("#b");
	$spanA.text(a);
	$spanB.text(b);

};

var checkAnswer = function () {
	var $input = $("#answer");
	var answer = parseInt($input.val(), 10);
	if (answer === a + b) {
		alert("Correct!");
	} else {
		alert("Incorect!");
	}
	generateProblem();
	$input.val("");
};


var $button = $("#check");
$button.click(checkAnswer);

generateProblem();