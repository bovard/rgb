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
        var dikj = new Dijkstra(game.getTileMap(), game.hero.getLocation());

        game.takeCreepTurns(dikj);
        render();
    }
}


function render() {
    //renderer.render(game.getTileMap(), game.getCreepMap(), game.getHero(), game.getHero().getDimension().getRGB());
	rendererCompositor.compose();
    //StatusRenderer.renderHeroStatusToDiv(heroStatDev, game.getHero());
    /*StatusRenderer.renderCreepStatiToDivs(
        [
            creep1StatDiv,
            creep2StatDiv,
            creep3StatDiv,
            creep4StatDiv
        ],
        game.getHeroController().getCreepsInRadiusSquared(1),
        game.getHero()
    )*/
}


function restart() {
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
				canvas: util.dom("canvas", {width: "480", height: "600"}),
				data: function() {
					return [game.getTileMap(), 
					        game.getCreepMap(), 
							game.getHero(), 
							game.getHero().getDimension().getRGB()];
				}
			},
			hud: {
				canvas: util.dom("canvas", {width: "120", height: "600"}),
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