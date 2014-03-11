
// all of the creeps one would find in a cave!
var Gnome = require('../creeps/Gnome');
var Direction = require('../map/Direction');
var Location = require('../map/Location');



function addGnonesNearPoi(tileMap, creepMap, poi, rgb) {
    var gnome;
    var gnomes = [];
    for (var i = 0; i < poi.length; i++) {
        var numGnomes = Math.ceil(Math.random() * 3);
        for (var j = 0; j < numGnomes; j++) {
            var start = poi[i];
            start = start.add(Direction.randomDir());
            start = start.add(Direction.randomDir());
            index = 0;
            while((!tileMap.getTileAtLoc(start) || creepMap.getCreepAtLoc(start)) && ++index < 10) {
                start = start.add(Direction.randomDir());
            }
            if (index < 10) {
                gnome = new Gnome();
                gnomes.push(gnome);
                creepMap.addCreepToMapAtLoc(start, gnome);
            }
        }
    }
    return gnomes;
}


function spawnCreeps(tileMap, creepMap, poi, rgb, heroLevel) {
    return addGnonesNearPoi(tileMap, creepMap, poi, rgb);
}


module.exports = {
    spawnCreeps: spawnCreeps
};