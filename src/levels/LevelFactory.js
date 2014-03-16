var Level = require('./Level');
var RGB = require('../RGB');
var LevelUtils = require('./LevelUtils');
var TileMap = require('../map/TileMap');
var CreepMap = require('../map/CreepMap');
var CaveBuilder = require('./builders/CaveBuilder');
var CaveSpawner = require('./CaveSpawner');

function makeSimpleMonotoneLevel(level, heroLevel) {
    var rgb;
    if (level % 3 === 0) {
        rgb = LevelUtils.getRGBForLevel(0, true, false, false);
    } else if (level % 3 === 1) {
        rgb = LevelUtils.getRGBForLevel(0, false, true, false);
    } else if (level % 3 === 2) {
        rgb = LevelUtils.getRGBForLevel(0, false, false, true);
    }
    var randWidth = Math.round(Math.random() * 10);
    var randHeight = Math.round(Math.random() * 10);
    var width = (level <= 2) ? 15 + randWidth : 45 + randWidth;
    var height = (level <= 2) ? 15 + randHeight : 45 + randHeight;
    var tileMap = new TileMap(width, height);
    var creepMap = new CreepMap(width, height);
    var creeps = [];
    var upStairsLoc = LevelUtils.getRandomCorner(tileMap);
    var downStairsLoc = LevelUtils.getRandomCorner(tileMap);
    var upStairsCorner = LevelUtils.getQuadForLocation(upStairsLoc, tileMap);
    var index = 0;
    while (upStairsCorner === LevelUtils.getQuadForLocation(downStairsLoc, tileMap)) {
        if (index++ > 10) {
            console.log("Breaking due to noob");
            break;
        }
        downStairsLoc = LevelUtils.getRandomCorner(tileMap);
    }
    var poi = CaveBuilder.build(tileMap, rgb, [upStairsLoc, downStairsLoc]);
    LevelUtils.addStairsToTileMap(tileMap, upStairsLoc, downStairsLoc);
    creeps = CaveSpawner.spawnCreeps(tileMap, creepMap, poi, rgb);

    return new Level(tileMap, creepMap, creeps);
}



function getLevel(dungeonLevel, heroLevel) {
    if (dungeonLevel <= 2) {
        return makeSimpleMonotoneLevel(dungeonLevel, heroLevel);
    }
}


module.exports = {
    getLevel: getLevel
};