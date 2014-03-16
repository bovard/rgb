var Game = require('./Game');
var Dijkstra = require('./map/Dijkstra');
var RenderCompositor = require('./render/RenderCompositor');
var Chat = require('./Chat');
var util = require('./Utility');
//var StatusRenderer = require('./render/StatusRenderer');

Chat.setOutputFunction(function(message, color) {
    console.log(message, color);
});

var gameOverState = false;
var needsRestart = true;
var rendererCompositor = null;

var game;

$(document).keyup(function(event) {
    if (needsRestart) {
        restart();
        return;
    }
    console.log("KeyCode", event.keyCode);

    if (game && game.input[event.keyCode]) {
        turn(event.keyCode);
    }
});


function turn(code) {
    if (!game.hero.isActive()) {
        game.hero.tick();
    }

    game.takeHeroTurn(code);

    if (game.hero.isActive()) {
        console.log("not done yet!");
        render();
        return;
    }
    render();

    if (!needsRestart) {
        // do dikjstra's on the TileMap to hero location
        game.dikj = new Dijkstra(game.getTileMap(), game.hero.getLocation(), 
			function(map, loc, startLoc) {
				return !!map.getTileAtXY(loc.x, loc.y) &&
				!game.getTileMap().getTileAtXY(loc.x, loc.y).getRGB(game.getHero().getDimension().getRGB()).isBlack();
			});
		
		// do dikjstra's on the CreepMap to hero location within radius squared r^2
		game.closeQuartersDijk = new Dijkstra(game.getCreepMap(), game.hero.getLocation(), 
			function(map, loc, startLoc) {
				return !map.getCreepAtLoc(loc) && !!game.getTileMap().getTileAtXY(loc.x, loc.y) &&
					!game.getTileMap().getTileAtXY(loc.x, loc.y).getRGB(game.getHero().getDimension().getRGB()).isBlack() &&				
					loc.distanceSquaredTo(startLoc) < Game.CREEP_AVOID_CREEP_RAD_SQR;
			});

        game.takeCreepTurns(game.dikj, game.closeQuartersDijk);
        render();
    }
}


function render() {
	rendererCompositor.compose();
}


function restart() {
    $('#chat').empty();
    needsRestart = false;
    game = new Game(gameOver);
	setupRenderCompositor();
    render();
}

function setupRenderCompositor() {
	var canvas = $("#gameCanvas")[0];
	console.log('found canvas', canvas);
	
	// Only need to setup compositor once
	if (!rendererCompositor) {
		var renderData = {
			game: {
				canvas: util.dom("canvas", {width: "600", height: "800"}),
				data: function() {
					return [game.getTileMap(), 
					        game.getCreepMap(), 
							game.getHero(), 
							game.getHero().getDimension().getRGB(),
							game.getScore(),
							game.getDungeonLevel(),
							game.getCloseQtrDijkstra(),
							game.getDijkstra()];
				}
			},
			hud: {
				canvas: util.dom("canvas", {width: "200", height: "800"}),
				data: function() {
					return [game.getHero(), 
					        game.getHeroController().getCreepsInRadiusSquared(1)];
				}
			}
		};
		rendererCompositor = new RenderCompositor(canvas, renderData);
	}
}

function gameOver() {
    render();
    needsRestart = true;
    // display game over
    // listen for keypress to restart
}

var heroStatDev;
var creep1StatDiv;
var creep2StatDiv;
var creep3StatDiv;
var creep4StatDiv;

// starts the game!
$(function() { 
    heroStatDev = $("#heroDiv");
    creep1StatDiv = $("#creep1Div");
    creep2StatDiv = $("#creep2Div");
    creep3StatDiv = $("#creep3Div");
    creep4StatDiv = $("#creep4Div");
    
	restart();

    // hook up the chat!
    Chat.setOutputFunction(function(text, color) {
        $('<div style="color:' + color + '">' + text + '</>').appendTo('#chat');
        var objDiv = document.getElementById("chat");
        objDiv.scrollTop = objDiv.scrollHeight;

    });

    Chat.log("Arrows to move/attack");
    Chat.log("1,2,3 to switch dimensions");
});