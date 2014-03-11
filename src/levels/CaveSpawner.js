
// all of the creeps one would find in a cave!
var Gnome = require('../creeps/Gnome');
var Direction = require('../map/Direction');
var Location = require('../map/Location');



function addGnonesNearPoi(tileMap, creepMap, poi) {
    for (var i = 0; i < poi.length; i++) {
        var numGnomes = Math.ceil(Math.random() * 3);
        for (var j = 0; j < numGnomes; j++) {
            var start = poi[i];
            start = start.add(Direction.randomDir());
            start = start.add(Direction.randomDir());
            while(!tileMap.getTileAtLoc(start) || creepMap.getCreepAtLoc(start)) {
                start = start.add(Direction.randomDir());
            }
            creepMap.addCreepToMapAtLoc(start,  new Gnome());
        }
    }
}


function spawnCreeps(tileMap, creepMap, poi, rgb) {
    addGnonesNearPoi(tileMap, creepMap, poi);
}


module.exports = {
    spawnCreeps: spawnCreeps
};