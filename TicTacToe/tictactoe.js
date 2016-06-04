var player = 1;
var board = [[0,0,0], [0,0,0], [0,0,0]];
var gameOver = false;

var checkWinningSet = function (player, i1, j1, i2, j2, i3, j3) {
	var cell1 = board[i1][j1];
	var cell2 = board[i2][j2];
	var cell3 = board[i3][j3];
	if (cell1 == player && cell2 == player && cell3 == player){
		gameOver = true;
		alert("Player" + player + "wins!");
	} 
};

var checkTie = function () {
	for (var i=0; i<3; i++) {
		for (var j=0; j<3; j++) {
			if (board[i][j] == 0) {
				return;
			}

		}
	}
	gameOver = true;
	alert("Cat's game!");

};

var checkWinner = function (player) {
	checkWinningSet(player, 0, 0, 0, 1, 0, 2);
	checkWinningSet(player, 1, 0, 1, 1, 1, 2);
	checkWinningSet(player, 2, 0, 2, 1, 2, 2);
	checkWinningSet(player, 0, 0, 1, 0, 2, 0);
	checkWinningSet(player, 0, 1, 1, 1, 2, 1);
	checkWinningSet(player, 0, 2, 1, 2, 2, 2);
	checkWinningSet(player, 0, 0, 1, 1, 2, 2);
	checkWinningSet(player, 0, 2, 1, 1, 2, 0);
	checkTie();
};

var setCellClickHandler = function ($td, row, col) {
	$td.click(function () {
		if ($(this).text() == "" && !gameOver) {
			if (player == 1) {
				board[row][col] = 1;
				var $span = $("<span></span>").text("X");
				$span.hide();
				$(this).append($span);
				$span.fadeIn();
				$(this).css("background-color", "#00F");
				checkWinner(player);
				player = 2;
			} else {
				board[row][col] = 2;
				var $span = $("<span></span>").text("O");
				$span.hide().appendTo(this).fadeIn();
				$(this).css("background-color", "#0F0");
				checkWinner(player);
				player = 1;
			}
		}
		console.log(board);
	});
};


var $table = $("<table></table>");
$("body").append($table);

for (var i=0; i<3; i++) {
	var $tr = $("<tr></tr>");
	$table.append($tr);
	for (var j=0; j<3; j++) {
		var $td = $("<td></td>");
		setCellClickHandler($td, i, j);
		$tr.append($td);
	}
}