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
var util = require('./../Utility');

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
    creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, rgb, spawnFunction, 3, heroLevel));
    creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, rgb, spawnFunction, 1, heroLevel + 2));

	// 30% chance to spawn some bulls to mix things up
	if (Math.random() < .30) {
		poi = CaveBuilder.build(tileMap, rgb, [upStairsLoc, downStairsLoc]);
		spawnFunction = CreepFactory.getBull;
		creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, rgb, spawnFunction, 1, heroLevel));
	}
	
	// 10% chance to spawn a she-devil to surprise the player
	if (Math.random() < .10) {
		poi = CaveBuilder.build(tileMap, rgb, [upStairsLoc, downStairsLoc]);
		spawnFunction = CreepFactory.getSheDevil;
		creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, [poi[util.rand(0, poi.length - 1)]], rgb, spawnFunction, 1, heroLevel));
	}
	
	// 5% chance to spawn a giant to rickroll the player
	if (Math.random() < .05) {
		poi = CaveBuilder.build(tileMap, rgb, [upStairsLoc, downStairsLoc]);
		spawnFunction = CreepFactory.getGiant;
		creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, [poi[util.rand(0, poi.length - 1)]], rgb, spawnFunction, 1, heroLevel));
	}
	
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
    creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, firstDimRGB, spawnFunction, 1, heroLevel + 1));

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
    creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, secondDimRGB, spawnFunction, 1, heroLevel + 1));

	// She-Devil level
	poi = CaveBuilder.build(tileMap, secondDimRGB, [upStairsLoc, downStairsLoc]);
	if (heroLevel > 10) {
        spawnFunction = CreepFactory.getSheDevil;
        creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, secondDimRGB, spawnFunction, 1, heroLevel));
    }
    if (heroLevel > 15) {
        spawnFunction = CreepFactory.getSheDevil;
        creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, secondDimRGB, spawnFunction, 2, heroLevel + 2));
    }
	
	// Giant level
	poi = CaveBuilder.build(tileMap, firstDimRGB, [upStairsLoc, downStairsLoc]);
	if (heroLevel > 10) {
        spawnFunction = CreepFactory.getGiant;
        creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, firstDimRGB, spawnFunction, 2, heroLevel));
    }
    if (heroLevel > 20) {
        spawnFunction = CreepFactory.getGiant;
        creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, firstDimRGB, spawnFunction, 4, heroLevel + 2));
    }
	
	// Bull level
	poi = CaveBuilder.build(tileMap, firstDimRGB, [upStairsLoc, downStairsLoc]);
	if (heroLevel > 5) {
        spawnFunction = CreepFactory.getBull;
        creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, firstDimRGB, spawnFunction, 5, heroLevel));
    }
    if (heroLevel > 10) {
        spawnFunction = CreepFactory.getBull;
        creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, firstDimRGB, spawnFunction, 10, heroLevel + 2));
    }
	
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
    // rat king!
    spawnFunction = CreepFactory.getRatKing;
    creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, RGB.White, spawnFunction, 1, heroLevel + 4));
    spawnFunction = CreepFactory.getRat;
    creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, firstDimRGB, spawnFunction, 3, heroLevel + 3));

    // green level
    poi = CaveBuilder.build(tileMap, secondDimRGB, [upStairsLoc, downStairsLoc]);
    spawnFunction = CreepFactory.getRat;
    creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, secondDimRGB, spawnFunction, 3, heroLevel + 3));

    // blue level
    poi = CaveBuilder.build(tileMap, thirdDimRGB, [upStairsLoc, downStairsLoc]);
    spawnFunction = CreepFactory.getRat;
    creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, thirdDimRGB, spawnFunction, 3, heroLevel + 3));

    return new Level(tileMap, creepMap, creeps);
}


function getLevel(dungeonLevel, heroLevel) {
    if (dungeonLevel <= 2) {
        return makeSimpleMonotoneLevel(dungeonLevel, heroLevel);
    } else if (dungeonLevel <= 5) {
        return makeDoubleDimensionLevel(dungeonLevel, heroLevel);
    } else if (dungeonLevel % 10 === 0) {
        return makeRatKingLevel(dungeonLevel, heroLevel);
    } else {
        return makeDoubleDimensionLevel(dungeonLevel, heroLevel);
    }
}


module.exports = {
    getLevel: getLevel
};