var TileMap = require('../map/TileMap');
var CreepMap = require('../map/CreepMap');
var Tile = require('../map/Tile');
var Location = require('../map/Location');
var RGB = require('../RGB');

function createTestTileMap() {
    var height = 20;
    var width = 20;
    var tileMap = new TileMap(height, width);
    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
            var rgb = new RGB(
                Math.round(Math.random() * 255),
                Math.round(Math.random() * 255),
                Math.round(Math.random() * 255)
            );
            var tile = new Tile(Tile.FLOOR_TILE, rgb);
            tileMap.addTileAtLoc(new Location(x, y), tile);
        }
    }
    tileMap.addStairsDownAtLoc(new Location(2, 2));
    tileMap.addStairsUp(new Location(17, 17));
    return tileMap;
}

function createTestCreepMap(tileMap, level) {
    var height = tileMap.height;
    var width = tileMap.width;
    var creepMap = new CreepMap(height, width);
    return creepMap;
}


module.exports = {
    createLevel: createTestTileMap,
    createTestCreepMap: createTestCreepMap
};