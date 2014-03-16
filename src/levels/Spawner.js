
var Direction = require('./../map/Direction');


function addCreepsNearPoi(tileMap, creepMap, poi, rgb, creationFunction, max, level) {
    var creep;
    var creeps = [];
    for (var i = 0; i < poi.length; i++) {
        var numCreeps = Math.ceil(Math.random() * max);
        for (var j = 0; j < numCreeps; j++) {
            var start = poi[i];
            start = start.add(Direction.randomDir());
            start = start.add(Direction.randomDir());
            index = 0;
            while((!tileMap.getTileAtLoc(start) || creepMap.getCreepAtLoc(start)) && ++index < 10) {
                start = start.add(Direction.randomDir());
            }
            if (index < 10) {
                creep = creationFunction(rgb, level);
                if (!start.isEqualTo(tileMap.getDownStairsLoc()) && !start.isEqualTo(tileMap.getUpStairsLoc())) {
                    if (tileMap.getTileAtLoc(start).getRGB().mask(rgb).isNotBlack()) {
                        creepMap.addCreepToMapAtLoc(start, creep);
                        creeps.push(creep);
                    }
                }
            }
        }
    }
    return creeps;
}


module.exports = {
    spawn: addCreepsNearPoi
};
