var Location = require('./Location');
var Map = require('./Map');
var Tile = require('./Tile');

function TileMap(x, y) {
	this.width = x;
	this.height = y;
    this.tiles = new Array(x);
	for (var i = 0; i < x; i++) {
		this.tiles[i] = new Array(y);
	}
	this.upStairs = null;
	this.downStairs = null;
}

TileMap.prototype = {
    locOnMap: Map.locOnMap,
    projectLocOnMap: Map.projectLocOnMap,
    addTileAtLoc: function(loc, tile) {
        var x = loc.x;
        var y = loc.y;
        if (!tile) {
            throw "Tile not defined!"
        }
		if (!this.locOnMap(loc)) {
            loc = this.projectLocOnMap(loc);
		}
		this.tiles[x][y] = tile;
    },
    mergeTileAtLoc: function(loc, tile) {
        if (!tile) {
            throw "Tile not defined!"
        }
		if (!this.locOnMap(loc)) {
            loc = this.projectLocOnMap(loc);
		}
        var existingTile = this.tiles[loc.x][loc.y];
        if (existingTile) {
            this.tiles[loc.x][loc.y] = new Tile(existingTile.getRepr(), tile.getRGB(existingTile.getRGB()))
        } else {
            this.tiles[loc.x][loc.y] = tile;
        }
    },
    mergeFloorTileAtLoc: function(loc, rgb) {
        var tile = new Tile(Tile.FLOOR_TILE, rgb);
        this.mergeTileAtLoc(loc, tile);
    },
    getTileAtLoc: function(loc) {
        if (!this.locOnMap(loc)) {
            return;
        }
		return this.tiles[loc.x][loc.y];
    },
	getTileAtXY: function(x, y) {
        return this.getTileAtLoc(new Location(x, y))

	},
	addStairsUp: function(loc, rgb) {
		var upStairs = new Tile(Tile.UP_STAIRS, rgb);
		this.upStairs = loc;
		this.addTileAtLoc(loc, upStairs);
	},
	addStairsDownAtLoc: function(loc, rgb) {
		var downStairs = new Tile(Tile.DOWN_STAIRS, rgb);
		this.downStairs = loc;
		this.addTileAtLoc(loc, downStairs);
	},
	getUpStairsLoc: function() {
		return this.upStairs;
	},
	getDownStairsLoc: function() {
		return this.downStairs;
	},
    isDownStairsLoc: function(loc) {
        return this.downStairs && loc.isEqualTo(this.downStairs);
    },
    isUpStairsLoc: function(loc) {
        return this.upStairs && loc.isEqualTo(this.upStairs);
    }
};

module.exports = TileMap;