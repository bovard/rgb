var Hero = require('./creeps/Hero');


function Game() {
    this.hero = new Hero();
    this.levels = [];
    this.currentLevel = null;
    // add a new level
    // set currentLevel to 0;
    this.addHeroToNextLevel();
}

Game.prototype = {
    addHeroToNextLevel: function() {

    },
    addHeroToPreviousLevel: function() {

    }
};