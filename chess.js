var fs = require("fs");

var pieceMoves = {};

fs.readFile('./movements/king.json', "utf8", (err, data) => {
	if (err) { console.log("Error, file read incomplete!!")}

	else { 
		const king_moves = JSON.parse(data);

		pieceMoves["king"] = king_moves;

		}
	});

fs.readFile('./movements/bishop.json', "utf8", (err, data) => {
	if (err) { console.log("Error, file read incomplete!!")}
	else { 
		const bishop_moves = JSON.parse(data);

		pieceMoves["bishop"] = bishop_moves;
		}
	});

fs.readFile('./movements/black_pawn.json', "utf8", (err, data) => {
	if (err) { console.log("Error, file read incomplete!!")}
	else { 
		const black_pawn_moves = JSON.parse(data);

		pieceMoves["black_pawn"] = black_pawn_moves;
		}
	});

fs.readFile('./movements/knight.json', "utf8", (err, data) => {
	if (err) { console.log("Error, file read incomplete!!")}
	else { 
		const knight_moves = JSON.parse(data);

		pieceMoves["white_pawn"] = white_pawn_moves;
		}
	});

fs.readFile('./movements/rook.json', "utf8", (err, data) => {
	if (err) { console.log("Error, file read incomplete!!")}
	else { 
		const rook_moves = JSON.parse(data);

		pieceMoves["rook"] = rook_moves;
		}
	});

fs.readFile('./movements/white_pawn.json', "utf8", (err, data) => {
	if (err) { console.log("Error, file read incomplete!!")}
	else { 
		const white_pawn_moves = JSON.parse(data);

		pieceMoves["white_pawn"] = white_pawn_moves;
		}
	});

//var pieceMoves = { "king": king_moves,
//					"bishop": bishop_moves,
//					"black_pawn": black_pawn_moves,
//					"white_pawn": white_pawn_moves,
//					"knight": knight_moves,
//					"rook": rook_moves
//					};

var letters = ["A","B","C","D", "E","F","G","H"];
var numbers = ["1","2","3","4", "5","6","7","8"];

function arrayPointer(posX, posY){
		var obj = {x: posX, y: posY};

		return obj
	}

function vector2D(run, rise) {

	return {x: rise, y: run};
	}

function makePiece(name, color) {

	var myPiece = new Object();
	myPiece.name = name;
	myPiece.color = color;

	if (color == "black"){
		myPiece.str = "b";            
		} 
	else {
		myPiece.str = "w";
		}

	if (name == "rook"){
		myPiece.str += "R";
		
		}

	else if (name == "knight"){
		myPiece.str += "H"; //K for knight and K for king overlap, thus knights are H for horse

		}

	else if (name == "bishop"){
		myPiece.str += "B";

		}

	else if (name == "queen"){
		myPiece.str += "Q";

		}

	else if (name == "king"){
		myPiece.str += "K";

		}

	else { //Pawn
		myPiece.str += "P";
		
		}

	return myPiece;
	}

function formatBoardString(array2) { //Currently does not work in discord due to nonequal width fonts

	var returnString = "";

	var r;
	for (r=0; r<array2.length;r++) {

		var currRow = array2[r];
		
		var rowString = "--------------------------------\n";
		var c;
		for (c=0; c<currRow.length; c++){

			var square = currRow[c];

			if (square != null){ //Square is not empty
				rowString += ("|" + square.str);
				}

			else {                
				rowString += "|     ";
				}
			}
		rowString += "|\n";
		returnString += rowString;

		}
	return returnString;    
	}

function setBoard(){

	//Make rook pointers
	var bRook1 = makePiece("rook", "black");
	var bRook2 = makePiece("rook", "black");

	var wRook1 = makePiece("rook", "white");
	var wRook2 = makePiece("rook", "white");

	//Make knight pointers
	var bKnight1 = makePiece("knight", "black");
	var bKnight2 = makePiece("knight", "black");

	var wKnight1 = makePiece("knight", "white");
	var wKnight2 = makePiece("knight", "white");

	//Make bishop pointers
	var bBishop1 = makePiece("bishop", "black");
	var bBishop2 = makePiece("bishop", "black");

	var wBishop1 = makePiece("bishop", "white");
	var wBishop2 = makePiece("bishop", "white");

	//Make Queen pointers
	var bQueen = makePiece("queen", "black");
	var wQueen = makePiece("queen", "white");

	//Make King pointers
	var bKing = makePiece("king", "black");
	var wKing = makePiece("king", "white");

	//Make pawn pointers
	var bPawn1 = makePiece("pawn", "black");
	var bPawn2 = makePiece("pawn", "black");
	var bPawn3 = makePiece("pawn", "black");
	var bPawn4 = makePiece("pawn", "black");
	var bPawn5 = makePiece("pawn", "black");
	var bPawn6 = makePiece("pawn", "black");
	var bPawn7 = makePiece("pawn", "black");
	var bPawn8 = makePiece("pawn", "black");

	var wPawn1 = makePiece("pawn", "white");
	var wPawn2 = makePiece("pawn", "white");
	var wPawn3 = makePiece("pawn", "white");
	var wPawn4 = makePiece("pawn", "white");
	var wPawn5 = makePiece("pawn", "white");
	var wPawn6 = makePiece("pawn", "white");
	var wPawn7 = makePiece("pawn", "white");
	var wPawn8 = makePiece("pawn", "white");

	var board = {

		pieces: [[bRook1, bKnight1, bBishop1, bQueen, bKing, bBishop2, bKnight2, bRook2],
				[bPawn1, bPawn2, bPawn3, bPawn4, bPawn5, bPawn6, bPawn7, bPawn8],
				[wPawn1, wPawn2, wPawn3, wPawn4, wPawn5, wPawn6, wPawn7, wPawn8],
				[wRook1, wKnight1, wBishop1, wQueen, wKing, wBishop2, wKnight2, wRook2]],

		boardArray: [[bRook1, bKnight1, bBishop1, bQueen, bKing, bBishop2, bKnight2, bRook2],
					[bPawn1, bPawn2, bPawn3, bPawn4, bPawn5, bPawn6, bPawn7, bPawn8],
					[null, null, null, null, null, null, null, null],
					[null, null, null, null, null, null, null, null],
					[null, null, null, null, null, null, null, null],
					[null, null, null, null, null, null, null, null],
					[wPawn1, wPawn2, wPawn3, wPawn4, wPawn5, wPawn6, wPawn7, wPawn8],
					[wRook1, wKnight1, wBishop1, wQueen, wKing, wBishop2, wKnight2, wRook2]], 
					//Two dimensional array representing the board state

		currMove: 0, //0 is White move, 1 is Black move

		totalMoves: 0, //How many turns into the game is it

		RESET() {
		
			board.boardArray[0] = board.pieces[0];
			board.boardArray[1] = board.pieces[1];
			board.boardArray[2] = [null, null, null, null, null, null, null, null];
			board.boardArray[3] = [null, null, null, null, null, null, null, null];
			board.boardArray[4] = [null, null, null, null, null, null, null, null];
			board.boardArray[5] = [null, null, null, null, null, null, null, null];
			board.boardArray[6] = board.pieces[2];
			board.boardArray[7] = board.pieces[3];
			return null;
			} 
		};

	return board; //Return pointer to board object
	}

function formatPieceString(array2) { // Text display of all piece positions

	var returnString = "\n";

	let letterCol = ["a", "b", "c", "d", "e", "f", "g", "h"]; 

	var r;
	for (r=0; r<array2.length;r++) { // For every row

		var currRow = array2[r];

		var c;
		for (c=0; c<currRow.length; c++) { // For every element in the current column

			if (currRow[c] != null) {
				var tempString = (currRow[c].color + " " +  currRow[c].name);
				
				var posx = letterCol[c];
				var posy = array2.length - c;
				returnString += (tempString + " at " + posx + posy + "\n");
				}

			}
		}

	return returnString;
	}

function letterNumber_to_arrayIndex(string) {

	let letterCol = ["A", "B", "C", "D", "E", "F", "G", "H"]; 

	var x = null;
	var y = null;

	var i;
	for (i=0; i<letterCol.length; i++){
		
		if (string[0] == letterCol[i]) {
			x = i;
			}
		}

	if (string[1] < 8){

		y = parseInt(string[1]) - 1;
		}

	if (x == null || y == null){
		var rtn = null;
		}

	else {
		var rtn = arrayPointer(x, y);
		}

	return rtn;
	}

function movePiece(board, orgin, desination) {}

function validMove(orig, dest, board) {

	var valid = true;
	
	var piece = board.boardArray[orig.y][orig.x]

	var origString = String(letters[orig.x]) + String(numbers[orig.y]);
	var destString = String(letters[dest.x]) + String(numbers[dest.y]);

	var dictKey;

	if (piece.name == "pawn"){

		if (piece.color == "black") { dictKey = "black_pawn";}

		else { dictKey = "white_pawn";}
		}

	else { dictKey = piece.name;}

	var moveList = pieceMoves.dictKey.origString;

	var i;	

	for (i=0; i < moveList.length; i++) {

		if (moveList[i] == destString) { valid = true;}
		}
	
	if (board.boardArray[dest.y][dest.x] != null){

		if (piece.color == board.boardArray[dest.y][dest.x].color) { valid = false;}
		}

	return valid;
	}


// -------------------------!!Start of Bot Code!!--------------------------------


const Discord = require('discord.js');
const { argv } = require("node:process");
//const { sign } = require("node:crypto");
const client = new Discord.Client();


var board = setBoard();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {

	if (msg.content == "!help"){
		fs.readFile("cmds/help.txt", "utf8",function(err, data) {

			if (err === null){msg.reply("\n" + data);}
			else {console.log("Issue reading file: " + err);}

			});
		}

	else if (msg.content =="!board"){

		var tempString = "not done";
		msg.reply("\n" + tempString);
		}

	else if (msg.content == "!pieces") {

		board = getBoard();
		var tempString = formatPieceString(board.boardArray);

		msg.reply("\n" + tempString);
		}

	else if (msg.content == "!RESET") {

		board.RESET();
		msg.reply(" New game started");
		}

	else if (msg.content.length == 10) { // Probably the move command

		var reply = "";

		var orig = msg.content.slice(2,4);
		var dest = msg.content.slice(8, 10);
	
		orig = letterNumber_to_arrayIndex(orig); // Convert from A1 form to [r][c] form
		dest = letterNumber_to_arrayIndex(dest);

		if (orig == null){  // Didn't recieve proper coordinates
			reply = "Oops, improper command....";
			}


		else if (validMove(orig, dest, board) == true){ // Recieved proper coordinates 

			movePiece(orig, dest);
			reply = orig + " to " + dest;
			}

		msg.reply(reply);        
		}
	});

client.login('');
