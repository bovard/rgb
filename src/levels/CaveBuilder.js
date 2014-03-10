var Location = require('../map/Location');
var Direction = require('../map/Direction');
var Tile = require('../map/Tile');
var CoarserMap = require('../map/CoarserMap');

var CUT_SIZE = 7;



function buildNodeAroundLoc(tileMap, loc, rgb, radiusSquared) {
    console.log("buildingNodeAroundLoc", loc.x, loc.y);
    loc = tileMap.projectLocOnMap(loc);
    // random radius
    if (!radiusSquared) {
        var sizeRandom = Math.random();
        if (sizeRandom < .5) {
            radiusSquared = 4;
        } else if (sizeRandom < .85) {
            radiusSquared = 7;
        } else {
            radiusSquared = 10
        }
    }

    // fill in the tiles
    var bounds = Math.round(Math.ceil(Math.sqrt(radiusSquared)));
    for (var x = -bounds; x <= bounds; x++) {
        for (var y = -bounds; y <= bounds; y++) {
            var newLoc = new Location(loc.x + x, loc.y + y);
            if (newLoc.distanceSquaredTo(loc) <= radiusSquared
                    && tileMap.locOnMap(newLoc)) {
                tileMap.mergeFloorTileAtLoc(newLoc, rgb)
            }
        }
    }
}


function connectLocs(tileMap, locA, locB, rgb) {
    locA = tileMap.projectLocOnMap(locA);
    locB = tileMap.projectLocOnMap(locB);
    var jaggedPath = Math.random() > .75;
    var doubleJagged = jaggedPath && Math.random() > .5;
    while (!locA.isEqualTo(locB)) {
        var toB = locA.directionTo(locB);
        if (Math.random() < .15) {
            toB = toB.rotateLeft();
        } else if (Math.random() < .15) {
            toB = toB.rotateRight();

        }
        tileMap.mergeFloorTileAtLoc(locA, rgb);
        if (jaggedPath && Math.random() < .25) {
            tileMap.mergeFloorTileAtLoc(locA.add(toB.rotateLeft()), rgb);
        }
        if (doubleJagged && Math.random() < .25) {
            tileMap.mergeFloorTileAtLoc(locA.add(toB.rotateRight()), rgb);
        }
        locA = locA.add(toB);
    }
}


// searches for a 'true' node in the coarseMap to the South, East, or SouthEast and connects
function connectCoarseNode(tileMap, coarseMap, loc, rgb) {
    if (!coarseMap.getValAtLoc(loc)) {
        return;
    }
    // connect EAST
    if (coarseMap.getValAtLoc(loc.add(Direction.EAST))) {
        connectLocs(
            tileMap,
            coarseMap.getMapLocCenterFromCoarseMapLoc(loc),
            coarseMap.getMapLocCenterFromCoarseMapLoc(loc.add(Direction.EAST)),
            rgb
        );
    } else if (coarseMap.getValAtLoc(loc.add(Direction.EAST, 2))) {
        connectLocs(
            tileMap,
            coarseMap.getMapLocCenterFromCoarseMapLoc(loc),
            coarseMap.getMapLocCenterFromCoarseMapLoc(loc.add(Direction.EAST, 2)),
            rgb
        );
    }
    // connect SOUTH
    if (coarseMap.getValAtLoc(loc.add(Direction.SOUTH))) {
        connectLocs(
            tileMap,
            coarseMap.getMapLocCenterFromCoarseMapLoc(loc),
            coarseMap.getMapLocCenterFromCoarseMapLoc(loc.add(Direction.SOUTH)),
            rgb
        );
    } else if (coarseMap.getValAtLoc(loc.add(Direction.SOUTH, 2))) {
        connectLocs(
            tileMap,
            coarseMap.getMapLocCenterFromCoarseMapLoc(loc),
            coarseMap.getMapLocCenterFromCoarseMapLoc(loc.add(Direction.SOUTH, 2)),
            rgb
        );
    }
    // connect SOUTH EAST
    if (coarseMap.getValAtLoc(loc.add(Direction.SOUTH).add(Direction.EAST))) {
        connectLocs(
            tileMap,
            coarseMap.getMapLocCenterFromCoarseMapLoc(loc),
            coarseMap.getMapLocCenterFromCoarseMapLoc(loc.add(Direction.SOUTH).add(Direction.EAST)),
            rgb
        );
    } else if (coarseMap.getValAtLoc(loc.add(Direction.SOUTH, 2).add(Direction.EAST, 2))) {
        connectLocs(
            tileMap,
            coarseMap.getMapLocCenterFromCoarseMapLoc(loc),
            coarseMap.getMapLocCenterFromCoarseMapLoc(loc.add(Direction.SOUTH, 2).add(Direction.EAST, 2)),
            rgb
        );
    }

}



function buildCaveSystem(tileMap, rgb, includeLocs) {
    // build a coarse map
    var x, y, loc;
    var coarseMap = new CoarserMap(tileMap, CUT_SIZE + Math.floor(Math.random() * 6));


    // assign teh includedLocs and build path to center of coarse tile
    if (includeLocs) {
        for (var i = 0; i < includeLocs.length; i++) {
            loc = includeLocs[i];
            var coarseLoc = coarseMap.getCoarseTileLocForMapLoc(loc);
            coarseMap.setValAtLoc(coarseLoc, true);
            connectLocs(tileMap, loc, coarseMap.getMapLocCenterFromCoarseMapLoc(coarseLoc), rgb);
            if (Math.random() > .5) {
                buildNodeAroundLoc(tileMap, loc, rgb, 5)
            }
        }
    }

    // randomly assign nodes
    var last = false;
    console.log('coarseMap height/width:', coarseMap.height, coarseMap.width);
    for (x = 0; x < coarseMap.width; x++) {
        for (y = 0; y < coarseMap.height; y++) {
            if (Math.random() > .5 || !last) {
                console.log('doing it at ', x, y);
                last = true;
                loc = new Location(x, y);
                coarseMap.setValAtLoc(loc, true);
                buildNodeAroundLoc(tileMap, coarseMap.getMapLocCenterFromCoarseMapLoc(loc), rgb)
            } else {
                last = false;
            }
        }
    }

    // connect nodes
    for (x = 0; x < coarseMap.width; x++) {
        for (y = 0; y < coarseMap.height; y++) {
            loc = new Location(x, y);
            connectCoarseNode(tileMap, coarseMap, loc, rgb);
        }
    }

}

module.exports = {
    buildCaveSystem: buildCaveSystem
};