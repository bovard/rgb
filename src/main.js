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
    StatusRenderer.renderHeroStatusToDiv(heroStatDev, game.getHero());
    StatusRenderer.renderCreepStatiToDivs(
        [
            creep1StatDiv,
            creep2StatDiv,
            creep3StatDiv,
            creep4StatDiv
        ],
        game.getHeroController().getCreepsInRadiusSquared(1),
        game.getHero()
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

var heroStatDev;
var creep1StatDiv;
var creep2StatDiv;
var creep3StatDiv;
var creep4StatDiv;

// starts the game!
$(function() {
    var canvas = $("#gameCanvas")[0];
    heroStatDev = $("#heroDiv");
    creep1StatDiv = $("#creep1Div");
    creep2StatDiv = $("#creep2Div");
    creep3StatDiv = $("#creep3Div");
    creep4StatDiv = $("#creep4Div");
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