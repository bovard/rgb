var TileMap = require('../map/TileMap');
var CreepMap = require('../map/CreepMap');
var Tile = require('../map/Tile');
var Location = require('../map/Location');
var CaveBuilder = require('./CaveBuilder');
var CaveSpawner = require('./CaveSpawner');
var RGB = require('../RGB');
var TestLevel = require('./TestLevel');

function createTestTileMap(tileMap) {
    // TODO: do we need to use hero level?
    var downStairs = new Location(2, 2);
    var upStairs = new Location(17, 17);
    if (Math.random() < .25) {
        upStairs = new Location(17, 2);
    } else if (Math.random() < .25) {
        upStairs = new Location(2, 17);
    }
    var poi = CaveBuilder.buildCaveSystem(tileMap, new RGB(255, 0, 0), [downStairs, upStairs]);
    if (Math.random() < .10) {
        CaveBuilder.buildCaveSystem(tileMap, new RGB(0, 255, 0));

    }
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
    tileMap.addStairsDownAtLoc(downStairs);
    tileMap.addStairsUp(upStairs);

    return poi;
}

function createTestCreepMap(tileMap, creepMap, poi, mapLevel, heroLevel) {
    CaveSpawner.spawnCreeps(tileMap, creepMap, poi, new RGB(130, 0, 0), heroLevel);
}


function createLevel(height, width, dungeonLevel, heroLevel) {
    if (!height) {
        height = 20;
    }
    if (!width) {
        width = 20;
    }
    var tileMap = new TileMap(height, width);
    var poi = createTestTileMap(tileMap);
    var creepMap = new CreepMap(height, width);
    createTestCreepMap(tileMap, creepMap, poi);
    return new TestLevel(tileMap, creepMap);
}


module.exports = {
    createTileMap: createTestTileMap,
    createTestCreepMap: createTestCreepMap,
    createLevel: createLevel
};