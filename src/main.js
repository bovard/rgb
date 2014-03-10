var Game = require('./Game');
var Dijkstra = require('./map/Dijkstra');
var Renderer = require('./Renderer');
var Chat = require('./Chat');

Chat.setOputFunction(function(message, color) {
    console.log(message, color);
});

var gameOverState = false;
var needsRestart = true;
var renderer = null;

var game;

$(document).keyup(function(event) {
    console.log("HERE");
    if (needsRestart) {
        restart();
        return;
    }

    if ([37, 38, 39, 40].indexOf(event.keyCode) !== -1) {
        turn(event.keyCode);
    }
});


function turn(code) {
    // if code is no good, return

    game.takeHeroTurn(code);

    if (game.hero.actionsPerformed < game.hero.numActions) {
        return;
    }

    game.hero.actionsPerformed = 0;

    render();

    // TODO: creep stuff

    // do dikjstra's on the TileMap to hero location
    //var dikj = new Dijkstra(game.tileMap, game.hero.location[0], game.hero.location[1]);

    // for creep in creepsMap.creeps
    //   for action in creep.actions
    //     creep.act()
    // redraw
}


function render() {
    renderer.render(game.getTileMap(), game.getCreepMap());

}


function restart() {
    needsRestart = false;
    game = new Game(Chat, gameOver);
    render();
}



function gameOver() {
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