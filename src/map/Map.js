var Location = require('./Location');

var Map = {
    locOnMap: function(loc) {
        if (loc.x < 0 || loc.y < 0) {
			return false;
		}
		if (loc.x >= this.width) {
			return false;
		}
		if (loc.y >= this.height) {
			return false;
		}
        return true;
    },
    projectLocOnMap: function(loc) {
        if (this.locOnMap(loc)) {
            return loc;
        }
        var x = loc.x;
        var y = loc.y
        if (x < 0) {
            x = 0;
        } else if (x >= this.width) {
            x = this.width - 1;
        }
        if (y < 0) {
            y = 0;
        } else if (y >= this.height) {
            y = this.height - 1;
        }
        return new Location(x, y);
    },
    setValAtLoc: function(loc, val) {
        if (!this.locOnMap(loc)) {
            throw "Tried to set something offmap!";
        }
        this.map[loc.x][loc.y] = val;
    },
    getValAtLoc: function(loc) {
        if (!this.locOnMap(loc)) {
            return null;
        }
        return this.map[loc.x][loc.y];
    }
};


module.exports = Map;