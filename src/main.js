var Game = require('./Game');
var Dijkstra = require('./map/Dijkstra');
var Renderer = require('./Renderer');
var Chat = require('./Chat');

Chat.setOutputFunction(function(message, color) {
    console.log(message, color);
});

var gameOverState = false;
var needsRestart = true;
var renderer = null;

var game;

$(document).keyup(function(event) {
    if (needsRestart) {
        restart();
        return;
    }

    if ([37, 38, 39, 40, 49, 50, 51].indexOf(event.keyCode) !== -1) {
        turn(event.keyCode);
    }
});


function turn(code) {
    // if code is no good, return

    game.takeHeroTurn(code);

    if (game.hero.actionsPerformed < game.hero.numActions) {
        console.log("not done yet!");
        return;
    }

    game.hero.actionsPerformed = 0;

    render();

    if (!needsRestart) {
        // do dikjstra's on the TileMap to hero location
        var dikj = new Dijkstra(game.getTileMap(), game.hero.getLocation(), 
			function(map, loc, startLoc) {
				return !!map.getTileAtXY(loc.x, loc.y);
			});
		
		// do dikjstra's on the CreepMap to hero location within radius squared r^2
		var closeQuartersDijk = new Dijkstra(game.getCreepMap(), game.hero.getLocation(), 
			function(map, loc, startLoc) {
				return !map.getCreepAtLoc(loc) && !!game.getTileMap().getTileAtXY(loc.x, loc.y) && 
					loc.distanceSquaredTo(startLoc) < Game.CREEP_AVOID_CREEP_RAD_SQR;
			});

        game.takeCreepTurns(dikj, closeQuartersDijk);
        render();
    }
}


function render() {
    renderer.render(game.getTileMap(), game.getCreepMap(), game.getHero(), game.getHero().getDimension().getRGB());

}


function restart() {
    needsRestart = false;
    game = new Game(Chat, gameOver);
    render();
}



function gameOver() {
    render();
    needsRestart = true;
    // display game over
    // listen for keypress to restart
}

// starts the game!
$(function() {
    var canvas = $("#myCanvas")[0];
    console.log('found canvas', canvas);
    renderer = new Renderer(canvas);
    restart();
});