var Game = require('./Game');
var Dijkstra = require('./map/Dijkstra');
var Renderer = require('./render/Renderer');
var Chat = require('./Chat');
var StatusRenderer = require('./render/StatusRenderer');

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
        var dikj = new Dijkstra(game.getTileMap(), game.hero.getLocation());

        game.takeCreepTurns(dikj);
        render();
    }
}


function render() {
    renderer.render(game.getTileMap(), game.getCreepMap(), game.getHero(), game.getHero().getDimension().getRGB());
    StatusRenderer.renderHeroStatusToCanvas(heroStatCanvas, game.getHero())
    StatusRenderer.renderCreepStatiToCanvi(
        [
            creep1StatCanvasContext,
            creep2StatCanvasContext,
            creep3StatCanvasContext,
            creep4StatCanvasContext
        ],
        game.getHero().getCreepsInRadiusSquared(1)
    )

}


function restart() {
    needsRestart = false;
    game = new Game(gameOver);
    render();
}



function gameOver() {
    render();
    needsRestart = true;
    // display game over
    // listen for keypress to restart
}

var heroStatCanvas;
var creep1StatCanvasContext;
var creep2StatCanvasContext;
var creep3StatCanvasContext;
var creep4StatCanvasContext;

// starts the game!
$(function() {
    var canvas = $("#gameCanvas")[0];
    heroStatCanvas = $("#heroCanvas");
    creep1StatCanvasContext = $("#creep1Canvas")[0].getContext('2d');
    creep2StatCanvasContext = $("#creep2Canvas")[0].getContext('2d');
    creep3StatCanvasContext = $("#creep3Canvas")[0].getContext('2d');
    creep4StatCanvasContext = $("#creep4Canvas")[0].getContext('2d');
    console.log('found canvas', canvas);
    renderer = new Renderer(canvas);
    restart();

    // hook up the chat!
    Chat.setOutputFunction(function(text, color) {
        $('<div style="color:' + color + '">' + text + '</>').appendTo('#chat');
        var objDiv = document.getElementById("chat");
        objDiv.scrollTop = objDiv.scrollHeight;

    });
});