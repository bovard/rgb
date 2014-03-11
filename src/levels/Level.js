var CreepMap = require('../map/CreepMap');
var CreepController = require('../creeps/CreepController');


function createCreepControllers(tileMap, creepMap, creeps) {
    var controllers = [];
    for (var i = 0; i < creeps.length; i++) {
        controllers.push(
            new CreepController(tileMap, creepMap, creeps[i])
        )
    }
    return controllers;
}

function Level(tileMap, creepMap, creeps) {
    this.tileMap = tileMap;
    this.creepMap = creepMap;
    this.creepControllers = createCreepControllers(tileMap, creepMap, creeps);

}

Level.prototype = {
	getTileMap: function() {
		return this.tileMap;
	},
	getCreepMap: function() {
		return this.creepMap;
	},
    getCreepControllers: function() {
        return this.creepControllers;
    }
};

module.exports = Level;