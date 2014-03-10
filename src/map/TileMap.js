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
	addTileAtLoc: function(x, y, tile) {
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
    mergeTileAtLoc: function(x, y, tile) {
        if (x * y < 0) {
			throw "Tried to add tile to a negative location (" + x + ", " + y + ")";
		}
		if (x >= this.width) {
			throw "Tried to add tile to a location offmap! (" + x + " >= " + this.width + ")";
		}
		if (y >= this.height) {
			throw "Tried to add tile to a location offmap! (" + y + " >= " + this.height + ")";
		}
        if (this.tiles[x][y]) {
            this.tiles[x][y] = new Tile(tile.getRepr(), tile.getRGB(this.tiles[x][y].getRGB()))
        } else {
            this.tiles[x][y] = tile;
        }
    },
    getTileAtLoc: function(loc) {
        return this.getTileAtXY(loc.x, loc.y);
    },
	getTileAtXY: function(x, y) {
		if (x < 0 || y < 0) {
			return;
		}
		if (x >= this.width) {
			return;
		}
		if (y >= this.height) {
			return;
		}
		return this.tiles[x][y];
	},
	addStairsUp: function(x, y, rgb) {
		var upStairs = new Tile(Tile.UP_STAIRS, rgb);
		this.upStairs = [x, y];
		this.addTileAtLoc(x, y, upStairs);
	},
	addStairsDown: function(x, y, rgb) {
		var downStairs = new Tile(Tile.DOWN_STAIRS, rgb);
		this.downStairs = [x, y];
		this.addTileAtLoc(x, y, downStairs);
	},
	getUpStairsLoc: function() {
		return this.upStairs;
	},
	getDownStairsLoc: function() {
		return this.downStairs;
	},
    isDownStairsLoc: function(x, y) {
        return this.downStairs && this.downStairs[0] === x && this.downStairs[1] === y;
    },
    isUpStairsLoc: function(x, y) {
        return this.upStairs && this.upStairs[0] === x && this.upStairs[1] === y;
    },
    getTileFromXYPlusDir: function(x, y, dir) {
        return this.getTileAtPosition(x + dir.x, y + dir.y);
    }
};

module.exports = TileMap;