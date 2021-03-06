var Hero = require('./creeps/Hero');
var Direction = require('./map/Direction');
var InputTrigger = require('./InputTrigger');
var LevelFactory = require('./levels/LevelFactory');
var HeroController = require('./creeps/HeroController');
var Chat = require('./Chat');
var util = require('./Utility');


function Game(deathCallback) {
    this.hero = new Hero(deathCallback);
    this.heroController = new HeroController(null, null, this.hero);
    this.levels = [];
    this.levelIndex = 0;
    this.generateNewLevel();
    this.moveHeroToLevel(0);
    this.chat = chat;
	this.input = {};
	this.initInput();
}

/* The radius squared around the hero that creeps will use special move logic to 
   avoid other creeps */
Game.CREEP_AVOID_CREEP_RAD_SQR = 25;

Game.prototype = {
    getTileMap: function() {
        return this.level.tileMap;
    },
    getCreepMap: function() {
        return this.level.creepMap;
    },
    takeHeroTurn: function(code) {
		// If there is an InputTrigger for this code, fire it
        if (this.input[code]) {
			this.input[code].fire();
		}
    },
    takeCreepTurn: function(creepController, dijk, closeQuartersDijk) {
        // attack logic if we are in this dimension
        if (creepController.isAdjacentToHero()) {
            creepController.attackHero();
        } else if(creepController.aggroHero()) {
            // Prioritize closeQuartersDijk if it has information
            var next = closeQuartersDijk.getNextTile(creepController.getCharacter().getLocation());
            if (!next) {
                next = dijk.getNextTile(creepController.getCharacter().getLocation());
                if (next)
					console.log("Dikj is telling me to go to", next.toString(), 'from', creepController.getCharacter().getLocation().toString());
            }
            else {
				if (next)
					console.log("closeQtrDikj is telling me to go to", next.toString(), 'from', creepController.getCharacter().getLocation().toString());
            }
			if (next) {
				var dir = creepController.getCharacter().getLocation().directionTo(next);
				if (creepController.canMove(dir)) {
					creepController.move(dir);
				} else {
					// Dijkstra should never tell the creep to move where it can't BUT just in case it does
					this.doBestAdjacentMove(creepController);
				}
			} else {
				this.doBestAdjacentMove(creepController);
			}
        }
    },
	/* This serves as a workaround for the problem state we've been running into where both
	   closeQtrDijkstra and dijkstra have no information for a particular creep location,
	   which causes errors. As root cause is unknown, we will simply attempt the best adjacent
	   move in this scenario and if that fails keep the creep stationary. */
	doBestAdjacentMove: function(creepController) {
		var dir = Direction.NORTH;
		var loc = creepController.getCharacter().getLocation();
		var heroLoc = creepController.getCreepMap().getHero().getLocation();
		var left = 100000;
		var right = 100000;
		var straight = 100000;
		var behind = 100000;
		var canMove = false;
		var moveWeights = [];
		var moves = {};
		if (creepController.canMove(dir)) {
			canMove = true;
			straight = loc.add(dir).distanceSquaredTo(heroLoc);
			moveWeights.push(straight);
			moves[straight] = dir;
		}
		if (creepController.canMove(dir.rotateLeft())) {
			canMove = true;
			left = loc.add(dir.rotateLeft()).distanceSquaredTo(heroLoc);
			moveWeights.push(left);
			moves[left] = dir.rotateLeft();
		}
		if (creepController.canMove(dir.rotateRight())) {
			canMove = true;
			right = loc.add(dir.rotateRight()).distanceSquaredTo(heroLoc);
			moveWeights.push(right);
			moves[right] = dir.rotateRight();
		}
		if (creepController.canMove(dir.opposite())) {
			canMove = true;
			behind = loc.add(dir.opposite()).distanceSquaredTo(heroLoc);
			moveWeights.push(behind);
			moves[behind] = dir.opposite();
		}
		if (canMove) {
			moveWeights.sort(util.op("sortAsc"));
			creepController.move(moves[moveWeights[0]]);
		}
	},
	/* dijk - move map where the absence of a tile is the obstacle
       closeQuartersDijk - move map of radius sqaured r^2 around hero where the presence 
						   of a creep is the obstacle */
    takeCreepTurns: function(dijk, closeQuartersDijk) {
        var creepControllers = this.level.getCreepControllers();
        var toRemove = [];
        var dimensionRGB = this.hero.getDimension().getRGB();
        for (var i = 0; i < creepControllers.length; i++) {
            var creepController = creepControllers[i];
            creepController.getCharacter().tick();
            // skip the creeps turn if not present in the current dimension
            if (creepController.getCharacter().getRGB().mask(dimensionRGB).isBlack()) {
                continue;
            }


            while(creepController.getCharacter().isActive()) {
                creepController.character.takeAction();
                this.takeCreepTurn(creepController, dijk, closeQuartersDijk);
            }
        }

    },
    moveOrAttackHero: function(dir) {
        this.heroController.moveOrAttack(dir);
        var level = this.levelIndex;
        var newLoc = this.heroController.getCharacter().getLocation();
        if (this.getTileMap().getUpStairsLoc().isEqualTo(newLoc)) {
            this.moveHeroToLevel(++level);
        } else if (this.level.getTileMap().getDownStairsLoc().isEqualTo(newLoc) && this.levelIndex != 0) {
            this.moveHeroToLevel(--level);
        }

    },
    switchDimensions: function(num) {
        if (this.hero.canSwitchDimensions()) {
            this.hero.takeAction();
            this.hero.resetPowerUpCount();
            this.hero.switchDimensions(num);
        } else {
            Chat.warn("You can't do that yet!");
        }
    },
    activatePowerUp: function() {
        var neighbors, i, creep;
        console.log("activating power up");
        if (!this.hero.canPowerUp()) {
            console.log("can't activate yet!");
            Chat.log("Not ready yet!");
            return;
        }
        var times = 5 + Math.ceil(this.hero.getDimension().getLevel() / 5);
        var radius =  Math.ceil(this.hero.getDimension().getLevel() / 5);
        var dmg = this.hero.getMaxHealth() * (this.hero.getDimension().getRGB().toDecimal() / 255);

        if (this.hero.getDimension().getRGB().hasRed()) {
            console.log("Activating blue power up");
            this.hero.powerUp();
            this.hero.poweredUp = false;
            neighbors = this.heroController.getCreepsInRadiusSquared(radius);
            Chat.warn("You release a pulse of energy");
            for (i = 0; i < neighbors.length; i++) {
                creep = neighbors[i];
                if (creep.getRGB().hasRed()) {
                    creep.addToActionDelay(times);
                    Chat.warn(creep.getName() + " is stunned!")
                }
            }
        } else if (this.hero.getDimension().getRGB().hasGreen()) {
            console.log("Activating green power up");
            Chat.warn("You feel faster!");
            this.hero.powerUp();
            this.hero.addToSpeedBoost(times);
        } else if (this.hero.getDimension().getRGB().hasBlue()) {
            console.log("Activating blue power up");
            this.hero.powerUp();
            this.hero.poweredUp = false;
            neighbors = this.heroController.getCreepsInRadiusSquared(radius);

            Chat.warn("You release a wave of fire");
            for (i = 0; i < neighbors.length; i++) {
                creep = neighbors[i];
                if (creep.getRGB().hasBlue()) {
                    this.heroController.doDamageToCreep(creep, dmg);
                    Chat.warn(creep.getName() + " is damaged by the flames!")

                }
            }
        }
    },
    getScore: function() {
        return (this.levels.length - 1) * 1000 + this.heroController.getScore();
    },
    getDungeonLevel: function() {
        return this.levelIndex + 1;
    },
	initInput: function() {
		this.input[37] = new InputTrigger(function() {
            this.hero.takeAction();
			this.moveOrAttackHero(Direction.WEST);
		}, this);
		this.input[38] = new InputTrigger(function() {
            this.hero.takeAction();
			this.moveOrAttackHero(Direction.NORTH);
		}, this);
		this.input[39] = new InputTrigger(function() {
            this.hero.takeAction();
			this.moveOrAttackHero(Direction.EAST);
		}, this);
		this.input[40] = new InputTrigger(function() {
            this.hero.takeAction();
			this.moveOrAttackHero(Direction.SOUTH);
		}, this);
        this.input[49] = new InputTrigger(function() {
            this.switchDimensions(0);
        }, this);
        this.input[50] = new InputTrigger(function() {
            this.switchDimensions(1);
        }, this);
        this.input[51] = new InputTrigger(function() {
            this.switchDimensions(2);
        }, this);
        this.input[32] = new InputTrigger(function() {
            this.activatePowerUp();
        }, this);
	},
    generateNewLevel: function() {
        if (!this.levels.length) {
            this.levels.push(LevelFactory.getLevel(0, this.hero.getLevel()));
        } else {
            this.levels.push(LevelFactory.getLevel(this.levelIndex + 1, this.hero.getLevel()));
        }
    },
    moveHeroToLevel: function(index) {
        if (this.level) {
            this.level.getCreepMap().removeHero();
        }

        while (this.levels.length <= index) {
            this.generateNewLevel();
        }
        this.level = this.levels[index];
        var loc = this.levelIndex < index || (this.levelIndex === 0 && index === 0) ?
            this.level.getTileMap().getDownStairsLoc() :
            this.level.getTileMap().getUpStairsLoc();
        this.levelIndex = index;
        if (this.levelIndex == 1) {
            Chat.warn("There is nothing here!");
            Chat.log("(Hint: Press 2 to enter the green dimension)")
        } else if (this.levelIndex === 2) {
            Chat.warn("There is nothing here!");
            Chat.log("(Hint: Press 3 to enter the blue dimension)")
        }
        // delete any creeps found at the location
        var creep = this.level.getCreepMap().getCreepAtLoc(loc);
        if (creep) {
            creep.applyDamage(10000);
            this.level.getCreepMap().deleteCreepAtLoc(loc);
        }
        this.level.getCreepMap().addHeroToMapAtLoc(loc, this.hero);
        this.heroController.setCreepMap(this.level.getCreepMap());
        this.heroController.setTileMap(this.level.getTileMap());
    },
    getHero: function() {
        return this.hero;
    },
    getHeroController: function() {
        return this.heroController;
    },
	// Debug, get dijkstra objects
	getCloseQtrDijkstra: function() {
		return this.closeQuartersDijk;
	},
	getDijkstra: function() {
		return this.dikj;
	}
	// End Debug, get dijkstra objects
};

module.exports = Game;