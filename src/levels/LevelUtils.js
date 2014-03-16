var RGB = require('../RGB');
var Location = require('../map/Location');

module.exports = {
    getRGBForLevel: function(level, red, green, blue) {
        var val = Math.min(150 + 3 * level, 255);
        return new RGB(
            red ? val : 0,
            green ? val : 0,
            blue ? val: 0
        )
    },
    getRandomSingleRGBForLevel: function(level) {
        var red, green, blue;
        var val = Math.random();
        if (val < .33) {
            red = true;
        } else if ( val < .67) {
            green = true;
        } else {
            blue = true;
        }
        return this.getRGBForLevel(level, red, green, blue);
    },
    getRandomCorner: function(tileMap) {
        var width = tileMap.width;
        var height = tileMap.height;
        var loc;
        var val = Math.random();
        if (val < .25) {
            loc = new Location(
                Math.ceil(Math.random() * (width /4 - 2)),
                Math.ceil(Math.random() * (height /4 - 2))
            )
        } else if (val < .5) {
            loc = new Location(
                width - Math.ceil(Math.random() * (width /4 - 2) + 1),
                Math.ceil(Math.random() * (height /4 - 2))
            )
        } else if (val < .75) {
            loc = new Location(
                Math.ceil(Math.random() * (width /4 - 2)),
                height - Math.ceil(Math.random() * (height / 4 - 2) + 1)
            )
        } else {
            loc = new Location(
                width - Math.ceil(Math.random() * (width / 4 - 2) + 1),
                height - Math.ceil(Math.random() * (height / 4 - 2) + 1)
            )
        }
        return tileMap.projectLocOnMap(loc);
    },
    getQuadForLocation: function(loc, tileMap) {
        if (loc.x < tileMap.width / 2) {
            if (loc.y < tileMap.height / 2) {
                return 2;
            } else {
                return 1;
            }
        } else {
            if (loc.y < tileMap.height / 2) {
                return 3;
            } else {
                return 4;
            }
        }

    },
    addStairsToTileMap: function(tileMap, upStairs, downStairs, upStairsRGB, downStarisRGB) {
        tileMap.addStairsUp(upStairs, upStairsRGB);
        tileMap.addStairsDownAtLoc(downStairs, downStarisRGB);
    }
};
