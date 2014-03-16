var TileMap = require('../map/TileMap');
var CreepMap = require('../map/CreepMap');
var Tile = require('../map/Tile');
var Location = require('../map/Location');
var CaveBuilder = require('./builders/CaveBuilder');
var CaveSpawner = require('./CaveSpawner');
var RGB = require('../RGB');
var TestLevel = require('./TestLevel');

function createTestTileMap(tileMap, rgb, addStairs) {
    var downStairs = new Location(2, 2);
    var upStairs = new Location(tileMap.width - 3, tileMap.height - 3);
    if (Math.random() < .25) {
        upStairs = new Location(tileMap.width - 3, 2);
    } else if (Math.random() < .25) {
        upStairs = new Location(2, tileMap.height - 3);
    }
    var poi = CaveBuilder.build(tileMap, rgb, addStairs ? [upStairs, downStairs]: []);

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
    if (addStairs) {
        tileMap.addStairsDownAtLoc(downStairs);
        tileMap.addStairsUp(upStairs);
    }

    return poi;
}

function createTestCreepMap(tileMap, creepMap, poi, rgb) {
    return CaveSpawner.spawnCreeps(tileMap, creepMap, poi, rgb);
}


function createLevel(height, width, dungeonLevel, heroLevel) {
    if (!height) {
        height = 20;
    }
    if (!width) {
        width = 20;
    }
    var tileMap = new TileMap(height, width);
    var creepMap = new CreepMap(height, width);

    var red = new RGB(100, 0, 0);
    var green = new RGB(0, 100, 0);
    var blue = new RGB(0, 0, 100);

    var poi = createTestTileMap(tileMap, RGB.Red, true);
    var creeps = createTestCreepMap(tileMap, creepMap, poi, red);

    poi = createTestTileMap(tileMap, RGB.Green, false);
    creeps = creeps.concat(createTestCreepMap(tileMap, creepMap, poi, green));

    poi = createTestTileMap(tileMap, RGB.Blue, false);
    creeps = creeps.concat(createTestCreepMap(tileMap, creepMap, poi, blue));

    return new TestLevel(tileMap, creepMap, creeps);
}


module.exports = {
    createTileMap: createTestTileMap,
    createTestCreepMap: createTestCreepMap,
    createLevel: createLevel
};