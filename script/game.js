let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
}

// The newGame function
function newGame(){
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
    showScore();
    addTurn();
}

/**
 * Clear the playerMoves array,
 * Randomly add a button ID to the currentGame array and push it to the computer
 * sequence array,
 * Call showTurn function
 */
function addTurn(){
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
    // showTurns();
}

function showScore(){
    document.getElementById("score").innerText = game.score;
}

module.exports = { game, newGame, showScore, addTurn };