/**
 * @jest-environment jsdom
 */

//Exporting from game.js and Importing to game.test.js
const { game, newGame, showScore, addTurn, lightsOn } = require("../game");

beforeAll( () => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});
// for the game object
describe("game object contains correct keys", () =>{
    test("score key exist", () =>{
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () =>{
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exist", () =>{
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exist", () =>{
        expect("choices" in game).toBe(true);
    });
    test("choices contains the correct ids", () =>{
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"])
    });
});

// for the newGame 
describe("newGame works correctly", () => {
    // beforeAll runs before all of the tests
    beforeAll(() => {
        game.score = 42;
        game.playerMoves = ["button1", "button2"];
        game.currentGame = ["button1", "button2"];
        document.getElementById("score").innerText = "42";
        newGame();
    });
    test("should set game score to zero", () =>{
        expect(game.score).toEqual(0);
    });
    test("should be one move in the computer's array", () =>{
        expect(game.currentGame.length).toEqual(1);
    });
    test("should set playerMoves array to default", () =>{
        expect(game.playerMoves.length).toEqual(0);
    });
    test("should display 0 for the element with the id of score", () =>{
        expect(document.getElementById("score").innerText).toEqual(0);
    })
});

// For the gameplay
describe("gameplay works correctly", () =>{
    //beforeEach runs before each test are run
    beforeEach(() =>{
        game.score = 0;
        game.currentGame = [];
        game.playerMoves = [];
        addTurn();
    });
    afterEach(() =>{
        game.score = 0;
        game.currentGame = [];
        game.playerMoves = [];
    });
    test("addTurn adds a new turn to the game", () =>{
        addTurn();
        expect(game.currentGame.length).toBe(2);
    });
    test("should add correct class to light up the buttons", () =>{
        let button = document.getElementById(game.currentGame[0]);
        lightsOn(game.currentGame[0]);
        expect(button.classList).toContain("light");
    })
});

