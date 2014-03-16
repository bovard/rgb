
// all of the creeps one would find in a cave!
var CreepFactory = require('../creeps/CreepFactory');
var Direction = require('../map/Direction');
var Location = require('../map/Location');



function addGnonesNearPoi(tileMap, creepMap, poi, rgb) {
    var creep;
    var creeps = [];
    for (var i = 0; i < poi.length; i++) {
        var numCreeps = Math.ceil(Math.random() * 2);
        for (var j = 0; j < numCreeps; j++) {
            var start = poi[i];
            start = start.add(Direction.randomDir());
            start = start.add(Direction.randomDir());
            index = 0;
            while((!tileMap.getTileAtLoc(start) || creepMap.getCreepAtLoc(start)) && ++index < 10) {
                start = start.add(Direction.randomDir());
            }
            if (index < 10) {
                creep = CreepFactory.getGnome(rgb, 1);
                if (Math.random() < .1) {
                    creep = CreepFactory.getOrc(rgb, 3);

                }
                creeps.push(creep);
                if (!start.isEqualTo(tileMap.getDownStairsLoc()) && !start.isEqualTo(tileMap.getUpStairsLoc())) {
                    if (tileMap.getTileAtLoc(start).getRGB().mask(rgb).isNotBlack()) {
                        creepMap.addCreepToMapAtLoc(start, creep);
                    }
                }
            }
        }
    }
    return creeps;
}


function spawnCreeps(tileMap, creepMap, poi, rgb, heroLevel) {
    return addGnonesNearPoi(tileMap, creepMap, poi, rgb);
}


module.exports = {
    spawnCreeps: spawnCreeps
};