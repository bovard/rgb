/* Drives the game. Can be utilized as follows:
   
   var myGame = new Game(canvasNodeToRenderOn);
   myGame.startGame();
   *** Play game ***
   myGame.endGame();
   
   */

var Hero = require('./creeps/Hero');
var util = require('./Utility');
var Renderer = require('./Renderer');
var Dijkstra = require('./map/Dijkstra.js');

var gameOverState = false;
var needsRestart = false;

function keyPressEvent(event) {
    if (needsRestart) {
        restart.call(this);
    }
    if ([12, 13, 14, 15].indexOf(event.code) !== -1) {
        turn.call(this, event.code);
    }
}

function turn(code) {
    // move the hero with the code
    this.hero.actionsPerformed++;

    // if the hero has more actions to perform, return
    if (this.hero.actionsPerformed < this.hero.numActions) {
        redraw();
		this.renderer.render(this.currentLevel.getTileMap(), 
			this.currentLevel.getCreepMap(), this.hero.getRGB())
        return;
    }

    // creeps turn, set actionsPerformed to 0!
    hero.actionsPerformed = 0;
    hero.endTurn();

    // do dikjstra's on the TileMap to hero location
	var heroLoc = this.hero.getLocation();
	this.Dijkstra = new Dijkstra(this.currentLevel.getTileMap(), heroLoc[0], heroLoc[1]);

    // for creep in creepsMap.creeps
    //   for action in creep.actions
    //     creep.act()
    // redraw
}

// Performs the logic needed to restart the game
function restart() {
    needsRestart = false;
    initGame.call(this);
}

function gameOver() {
    // display game over
    // listen for keypress to restart
}

// Returns game to initial state. Canvas arg is optional.
function initGame(canvas) {
	this.canvas = canvas ? canvas : this.canvas;
    this.hero = new Hero();
    this.levels = [];
    this.currentLevel = null;
    // add a new level
    // set currentLevel to 0;
    this.addHeroToNextLevel();
	// No need to reinitialize renderer if already initialized
	this.renderer = !this.renderer ? new Renderer(this.canvas) : this.renderer;
}

function Game(canvas) {
    initGame.call(this, canvas);
}

Game.prototype = {
	// Registers mouse event handler so game can begin
	startGame: function() {
		this.onClickHandler = util.addHandler(this.canvas, "onclick", util.bind(keyPressEvent, this));
	},
	// Destroys mouse event handler so game stops updating
	endGame: function() {
		util.removeHandler(this.onClickHandler);
	},
    addHeroToNextLevel: function() {

    },
    addHeroToPreviousLevel: function() {

    }
};

module.exports = Game;