var Game = require('./Game');
var Dijkstra = require('./map/Dijkstra');
var Renderer = require('./Renderer');

var renderer = new Renderer();

var gameOverState = false;
var needsRestart = true;

var game;

function keyPressEvent(event) {
    if (needsRestart) {
        restart();
    }
    if ([12, 13, 14, 15].indexOf(event.code) !== -1) {
        turn(event.code);
    }
}


function turn(code) {
    // if code is no good, return

    game.takeHeroTurn(code);

    if (game.hero.actionsPerformed < game.hero.numActions) {
        return;
    }

    game.hero.actionsPerformed = 0;

    renderer.render(game.tileMap, game.creepMap);

    // TODO: creep stuff

    // do dikjstra's on the TileMap to hero location
    //var dikj = new Dijkstra(game.tileMap, game.hero.location[0], game.hero.location[1]);

    // for creep in creepsMap.creeps
    //   for action in creep.actions
    //     creep.act()
    // redraw
}



function restart() {
    needsRestart = false;
    game = new Game();
}



function gameOver() {
    needsRestart = true;
    // display game over
    // listen for keypress to restart
}