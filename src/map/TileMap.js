var Location = require('./Location');
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
    addTileAtLoc: function(loc, tile) {
        var x = loc.x;
        var y = loc.y;
        if (!tile) {
            throw "Tile not defined!"
        }
        if (x < 0 || y < 0) {
			throw "Tried to add tile to a negative location (" + x + ", " + y + ")";
		}
		if (x >= this.width) {
			throw "Tried to add tile to a location offmap! (" + x + " >= " + this.width + ")";
		}
		if (y >= this.height) {
			throw "Tried to add tile to a location offmap! (" + y + " >= " + this.height + ")";
		}
		this.tiles[x][y] = tile;
    },
    mergeTileAtLoc: function(loc, tile) {
        if (!tile) {
            throw "Tile not defined!"
        }
        if (loc.x < 0 || loc.y < 0) {
			throw "Tried to add tile to a negative location (" + loc.x + ", " + loc.y + ")";
		}
		if (loc.x >= this.width) {
			throw "Tried to add tile to a location offmap! (" + loc.x + " >= " + this.width + ")";
		}
		if (loc.y >= this.height) {
			throw "Tried to add tile to a location offmap! (" + loc.y + " >= " + this.height + ")";
		}
        if (this.tiles[loc.x][loc.y]) {
            this.tiles[loc.x][loc.y] = new Tile(tile.getRepr(), tile.getRGB(this.tiles[loc.x][loc.y].getRGB()))
        } else {
            this.tiles[loc.x][loc.y] = tile;
        }
    },
    getTileAtLoc: function(loc) {
        if (loc.x < 0 || loc.y < 0) {
			return;
		}
		if (loc.x >= this.width) {
			return;
		}
		if (loc.y >= this.height) {
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