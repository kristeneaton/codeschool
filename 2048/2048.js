var size = 4;
var board = {};

var tileKey = function (col, row) {
	return "tile" + col + "-" + row;
};

var createBoard = function () {
	var $board = $("#board");
	for (var y = 0; y < size; y++) {
		var $row = $("<div></div>").addClass("row");
		$board.append($row);
		for (var x = 0; x < size; x++) {
			var $tile = $("<div></div>").addClass("tile");
			$tile.attr("id", tileKey(x, y));
			$row.append($tile);

		}
	}

};


var refreshBoard = function () {
	for (var y = 0; y < size; y++) {
		for (var x = 0; x < size; x++) {
			var key = tileKey(x,y);
			var num = board[key];
			var $tile = $("#" + key);
			$tile.text(num).addClass("tile-" + num);
		}

	}
	
};


var getEmptyTiles = function () {
	var empty = [];
	for (var y = 0; y < size; y++) {
		for (var x = 0; x < size; x++) {
			var key = tileKey(x,y);
			var num = board[key];
			if (num === undefined) {
				empty.push(key);
			}
		}
	}
	return empty;

};


var addRandomTile = function () {
	var emptyTiles = getEmptyTiles();
	var randomIndex = Math.floor(Math.random() * emptyTiles.length);
	var randomEmptyTile = emptyTiles[randomIndex];

	if (Math.random() > 0.8) {
		board[randomEmptyTile] = 4;
	} else {
		board[randomEmptyTile] = 2;
	}
};

board["tile1-1"] = 2;
board["tile2-2"] = 4;
board["tile3-3"] = 128;

createBoard();
addRandomTile();
refreshBoard();