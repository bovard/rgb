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
    addHeroToMapAtLoc: function(x, y, hero) {
        this.moveCreepToLoc(x, y, hero);
        this.hero = hero;
    },
    addCreepToMapAtLoc: function(x, y, creep) {
        this.moveCreepToLoc(x, y, creep);
        this.creeps.push(creep);
    },
    moveHeroToLoc: function(x, y) {
        this.moveCreepToLoc(x, y, this.hero);
    },
	moveCreepToLoc: function(x, y, creep) {
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
            this.deleteCreepAtLoc(creep.location[0], creep.location[1]);
        }
        creep.setLocation([x, y]);
	},
	getCreepAtLoc: function(x, y) {
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
    heroAtLocation: function(x, y) {
        return this.getCreepAtLoc(x, y) && this.getCreepAtLoc(x, y) === this.hero;
    },
	deleteCreepAtLoc: function(x, y) {
		this.creepsLoc[x][y] = undefined;
	}
};