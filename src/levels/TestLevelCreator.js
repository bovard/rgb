var TileMap = require('../map/TileMap');
var CreepMap = require('../map/CreepMap');
var Tile = require('../map/Tile');
var Location = require('../map/Location');
var CaveBuilder = require('./CaveBuilder');
var RGB = require('../RGB');

function createTestTileMap(mapLevel, heroLevel) {
    // TODO: do we need to use hero level?
    var height = 20;
    var width = 20;
    var tileMap = new TileMap(height, width);
    var downStairs = new Location(2, 2);
    var upStairs = new Location(17, 17);
    CaveBuilder.buildCaveSystem(tileMap, new RGB(255, 0, 0), [downStairs, upStairs]);
    /*
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
    */
    tileMap.addStairsDownAtLoc(new Location(2, 2));
    tileMap.addStairsUp(new Location(17, 17));
    return tileMap;
}

function createTestCreepMap(tileMap, mapLevel, heroLevel) {
    // TODO: use mapLevel and herolevel when making map
    var height = tileMap.height;
    var width = tileMap.width;
    var creepMap = new CreepMap(height, width);
    // TODO: add creeps here!
    return creepMap;
}


module.exports = {
    createLevel: createTestTileMap,
    createTestCreepMap: createTestCreepMap
};