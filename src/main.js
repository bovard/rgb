var Game = require('./Game');

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
    // move the hero with the code
    hero.actionsPerformed++;

    // if the hero has more actions to perform, return
    if (hero.actionsPerformed < hero.numActions) {
        redraw();
        return;
    }

    // creeps turn, set actionsPerformed to 0!
    hero.actionsPerformed = 0;
    hero.endTurn();

    // do dikjstra's on the TileMap to hero location

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
    // display game over
    // listen for keypress to restart

}