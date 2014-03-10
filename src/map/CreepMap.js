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
    addCreepToMapAtLoc: function(loc, creep) {
        this.moveCreepToLoc(loc, creep);
        this.creeps.push(creep);
    },
    moveHeroToLoc: function(loc) {
        this.moveCreepToLoc(loc, this.hero);
    },
    moveCreepToLoc: function(loc, creep) {
        if (!creep) {
            throw "Tried to move a creep but no creep specified!";
        }
		if (loc.x < 0 || loc.y < 0) {
			throw "Tried to move creep to a negative location (" + loc.x + ", " + loc.y + ")";
		}
		if (loc.x >= this.width) {
			throw "Tried to move creep to a location offmap! (" + loc.x + " >= " + this.width + ")";
		}
		if (loc.y >= this.height) {
			throw "Tried to move creep to a location offmap! (" + loc.y + " >= " + this.height + ")";
		}
		if (this.creepsLoc[loc.x][loc.y]) {
			throw "There is already a creep there: " + this.creepsLoc[loc.x][loc.y];
		}
		this.creepsLoc[loc.x][loc.y] = creep;
        if (creep.getLocation()) {
            this.deleteCreepAtLoc(creep.location);
        }
        creep.setLocation(loc);
    },
    getCreepAtLoc: function(loc) {
        if (loc.x < 0 || loc.y < 0) {
			return;
		}
		if (loc.x >= this.width) {
			return;
		}
		if (loc.y >= this.height) {
			return;
		}
		return this.creepsLoc[loc.x][loc.y];
    },
    heroAtLoc: function(loc) {
        return this.getCreepAtLoc(loc) && this.getCreepAtLoc(loc) === this.hero;
    },
    deleteCreepAtLoc: function(loc) {
        this.creepsLoc[loc.x][loc.y] = undefined;
    }
};

module.exports = CreepMap;