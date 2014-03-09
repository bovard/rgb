var Hero = require('./creeps/Hero');
var TestLevelCreator = require('./levels/TestLevelCreator');
var CreepMap = require('map/CreepMap');


function Game() {
    // TODO: fix this a lot
    this.hero = new Hero();
    this.tileMap = TestLevelCreator.createLevel();
    this.creepMap = new CreepMap(this.tileMap.width, this.tileMap.height);
    this.creepMap.addHeroToMapAtLoc(
        Math.round(this.tileMap.width / 2),
        Math.round(this.tileMap.height / 2)
    );
}

Game.prototype = {
    getTileMap: function() {
        return this.tileMap;
    },
    getCreepMap: function() {
        return this.creepMap;
    }
};