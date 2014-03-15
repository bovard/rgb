var Hero = require('./creeps/Hero');
var TestLevel = require('./levels/TestLevel');
var Direction = require('./map/Direction');
var InputTrigger = require('./InputTrigger');
var TestLevelCreator = require('./levels/TestLevelCreator');
var HeroController = require('./creeps/HeroController');


function Game(deathCallback) {
    this.hero = new Hero(deathCallback);
    this.heroController = new HeroController(null, null, this.hero);
    this.levels = [];
    this.generateNewLevel();
    this.levelIndex = 0;
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
            this.hero.takeAction();
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
                console.log("Dikj is telling me to go to", next.toString(), 'from', creepController.getCharacter().getLocation().toString());
            }
            else {
                console.log("closeQtrDikj is telling me to go to", next.toString(), 'from', creepController.getCharacter().getLocation().toString());
            }
            var dir = creepController.getCharacter().getLocation().directionTo(next);
            if (creepController.canMove(dir)) {
                creepController.move(dir);
            }
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
        this.hero.switchDimensions(num);
    },
	initInput: function() {
		this.input[37] = new InputTrigger(function() {
			this.moveOrAttackHero(Direction.WEST);
		}, this);
		this.input[38] = new InputTrigger(function() {
			this.moveOrAttackHero(Direction.NORTH);
		}, this);
		this.input[39] = new InputTrigger(function() {
			this.moveOrAttackHero(Direction.EAST);
		}, this);
		this.input[40] = new InputTrigger(function() {
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
	},
    generateNewLevel: function() {
        this.levels.push(TestLevelCreator.createLevel(50, 50));
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
        this.level.getCreepMap().addHeroToMapAtLoc(loc, this.hero);
        this.heroController.setCreepMap(this.level.getCreepMap());
        this.heroController.setTileMap(this.level.getTileMap());
    },
    getHero: function() {
        return this.hero;
    },
    getHeroController: function() {
        return this.heroController;
    }
};

module.exports = Game;