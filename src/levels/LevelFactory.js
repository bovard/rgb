var Level = require('./Level');
var RGB = require('../RGB');
var LevelUtils = require('./LevelUtils');
var TileMap = require('../map/TileMap');
var CreepMap = require('../map/CreepMap');
var CaveBuilder = require('./builders/CaveBuilder');
var CaveSpawner = require('./CaveSpawner');
var Spawner = require('./Spawner');
var CreepFactory = require('./../creeps/CreepFactory');
var CityBuilder = require('./builders/CityBuilder');

function initTileMapAndCreepMap(level) {
    var randWidth = Math.round(Math.random() * (10 + level/2));
    var randHeight = Math.round(Math.random() * (10 + level/2));
    var width = 15 + 2 * level + randWidth;
    var height = 15 + 2 * level + randHeight;
    var tileMap = new TileMap(width, height);
    var creepMap = new CreepMap(width, height);
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
    LevelUtils.addStairsToTileMap(tileMap, upStairsLoc, downStairsLoc);
    return {
        tileMap: tileMap,
        creepMap: creepMap
    };
}


function makeSimpleMonotoneLevel(level, heroLevel) {
    var rgb;
    if (level % 3 === 0) {
        rgb = LevelUtils.getRGBForLevel(0, true, false, false);
    } else if (level % 3 === 1) {
        rgb = LevelUtils.getRGBForLevel(0, false, true, false);
    } else if (level % 3 === 2) {
        rgb = LevelUtils.getRGBForLevel(0, false, false, true);
    }
    var tileCreepMap = initTileMapAndCreepMap(level);
    var creeps = [];
    var tileMap = tileCreepMap.tileMap;
    var creepMap = tileCreepMap.creepMap;
    var upStairsLoc = tileMap.getUpStairsLoc();
    var downStairsLoc = tileMap.getDownStairsLoc();

    // spawn cave
    var poi = CaveBuilder.build(tileMap, rgb, [upStairsLoc, downStairsLoc]);

    // spawn rats
    var spawnFunction = CreepFactory.getRat;
    creeps = Spawner.spawn(tileMap, creepMap, poi, rgb, spawnFunction, 5, heroLevel);

    return new Level(tileMap, creepMap, creeps);
}

function makeDoubleDimensionLevel(level, heroLevel) {
    var firstDimRGB, secondDimRGB;
    if (level % 3 === 0) {
        firstDimRGB = LevelUtils.getRGBForLevel(level, true, false, false);
        secondDimRGB = LevelUtils.getRGBForLevel(level, false, false, true);
    } else if (level % 3 === 1) {
        firstDimRGB = LevelUtils.getRGBForLevel(level, true, false, false);
        secondDimRGB = LevelUtils.getRGBForLevel(level, false, true, false);
    } if (level % 3 === 2) {
        firstDimRGB = LevelUtils.getRGBForLevel(level, false, false, false);
        secondDimRGB = LevelUtils.getRGBForLevel(level, false, true, true);
    }
    var tileCreepMap = initTileMapAndCreepMap(level);
    var creeps = [];
    var tileMap = tileCreepMap.tileMap;
    var creepMap = tileCreepMap.creepMap;
    var upStairsLoc = tileMap.getUpStairsLoc();
    var downStairsLoc = tileMap.getDownStairsLoc();

    // orc level
    var poi = CaveBuilder.build(tileMap, firstDimRGB, [upStairsLoc, downStairsLoc]);
    var spawnFunction;
    if (heroLevel > 5) {
        spawnFunction = CreepFactory.getOrcHunter;
        creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, firstDimRGB, spawnFunction, 1, heroLevel + 1));
    }
    if (heroLevel > 10) {
        spawnFunction = CreepFactory.getOrcBoss;
        creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, firstDimRGB, spawnFunction, 1, heroLevel));
    }
    spawnFunction = CreepFactory.getOrc;
    creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, firstDimRGB, spawnFunction, 3, heroLevel));

    // gnome level
    poi = CaveBuilder.build(tileMap, secondDimRGB, [upStairsLoc, downStairsLoc]);
    if (heroLevel > 5) {
        spawnFunction = CreepFactory.getConstruct;
        creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, secondDimRGB, spawnFunction, 2, heroLevel));
    }
    if (heroLevel > 10) {
        spawnFunction = CreepFactory.getConstruct;
        creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, secondDimRGB, spawnFunction, 1, heroLevel + 2));
    }
    spawnFunction = CreepFactory.getGnome;
    creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, secondDimRGB, spawnFunction, 3, heroLevel));

    return new Level(tileMap, creepMap, creeps);
}

function makeRatKingLevel(level, heroLevel) {
    var firstDimRGB = LevelUtils.getRGBForLevel(level, true, false, false);
    var secondDimRGB = LevelUtils.getRGBForLevel(level, false, true, false);
    var thirdDimRGB = LevelUtils.getRGBForLevel(level, false, false, true);
    var tileCreepMap = initTileMapAndCreepMap(level);
    var creeps = [];
    var tileMap = tileCreepMap.tileMap;
    var creepMap = tileCreepMap.creepMap;
    var upStairsLoc = tileMap.getUpStairsLoc();
    var downStairsLoc = tileMap.getDownStairsLoc();

    // red level
    var poi = CaveBuilder.build(tileMap, firstDimRGB, [upStairsLoc, downStairsLoc]);
    var spawnFunction;
    if (heroLevel > 5) {
        spawnFunction = CreepFactory.getOrcHunter;
        creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, firstDimRGB, spawnFunction, 1, heroLevel + 1));
    }
    if (heroLevel > 10) {
        spawnFunction = CreepFactory.getOrcBoss;
        creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, firstDimRGB, spawnFunction, 1, heroLevel));
    }
    spawnFunction = CreepFactory.getOrc;
    creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, firstDimRGB, spawnFunction, 3, heroLevel));

    // gnome level
    poi = CaveBuilder.build(tileMap, secondDimRGB, [upStairsLoc, downStairsLoc]);
    if (heroLevel > 5) {
        spawnFunction = CreepFactory.getConstruct;
        creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, secondDimRGB, spawnFunction, 2, heroLevel));
    }
    if (heroLevel > 10) {
        spawnFunction = CreepFactory.getConstruct;
        creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, secondDimRGB, spawnFunction, 1, heroLevel + 2));
    }
    spawnFunction = CreepFactory.getGnome;
    creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, secondDimRGB, spawnFunction, 3, heroLevel));

    return new Level(tileMap, creepMap, creeps);
}


function getLevel(dungeonLevel, heroLevel) {
    if (dungeonLevel <= 2) {
        return makeSimpleMonotoneLevel(dungeonLevel, heroLevel);
    } else if (dungeonLevel <= 5) {
        return makeDoubleDimensionLevel(dungeonLevel, heroLevel);
    }
}


module.exports = {
    getLevel: getLevel
};