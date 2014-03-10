var Location = require('./Location');

function CreepMap(x, y) {
    this.width = x;
    this.height = y;
	this.creepsLoc = new Array(x);
	for (var i = 0; i < x; i++) {
		this.creepsLoc[i] = new Array(y);
	}
    this.creeps = [];
    this.hero = null;
}

CreepMap.prototype = {
    addHeroToMapAtLoc: function(loc, hero) {
        this.moveCreepToLoc(loc, hero);
        this.hero = hero;
    },
    addHeroToMapAtXY: function(x, y, hero) {
        this.moveCreepToXY(x, y, hero);
        this.hero = hero;
    },
    addCreepToMapAtLoc: function(loc, creep) {
        this.moveCreepToLoc(loc, creep);
        this.creeps.push(creep);
    },
    moveHeroToLoc: function(loc) {
        this.moveCreepToLoc(loc, this.hero);
    },
    moveHeroToXY: function(x, y) {
        this.moveCreepToXY(x, y, this.hero);
    },
    moveCreepToLoc: function(loc, creep) {
        this.moveCreepToXY(loc.x, loc.y, creep)
    },
	moveCreepToXY: function(x, y, creep) {
        if (!creep) {
            throw "Tried to move a creep but no creep specified!";
        }
		if (x * y < 0) {
			throw "Tried to move creep to a negative location (" + x + ", " + y + ")";
		}
		if (x >= this.width) {
			throw "Tried to move creep to a location offmap! (" + x + " >= " + this.width + ")";
		}
		if (y >= this.height) {
			throw "Tried to move creep to a location offmap! (" + y + " >= " + this.height + ")";
		}
		if (this.creepsLoc[x][y]) {
			throw "There is already a creep there: " + this.creepsLoc[x][y];
		}
		this.creepsLoc[x][y] = creep;
        if (creep.getLocation()) {
            this.deleteCreepAtXY(creep.location.x, creep.location.y);
        }
        creep.setLocation(new Location(x, y));
	},
    getCreepAtLoc: function(loc) {
        return this.getCreepAtXY(loc.x, loc.y);
    },
	getCreepAtXY: function(x, y) {
		if (x * y < 0) {
			return;
		}
		if (x >= this.width) {
			return;
		}
		if (y >= this.height) {
			return;
		}
		return this.creepsLoc[x][y];
	},
    heroAtLoc: function(loc) {
        return this.heroAtXY(loc.x, loc.y);
    },
    heroAtXY: function(x, y) {
        return this.getCreepAtXY(x, y) && this.getCreepAtXY(x, y) === this.hero;
    },
    deleteCreepAtLoc: function(loc) {
        this.creepsLoc[loc.x][loc.y] = undefined;
    },
	deleteCreepAtXY: function(x, y) {
		this.creepsLoc[x][y] = undefined;
	}
};

module.exports = CreepMap;