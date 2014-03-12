var Hero = require('./creeps/Hero');
var TestLevel = require('./levels/TestLevel');
var Direction = require('./map/Direction');
var InputTrigger = require('./InputTrigger');
var TestLevelCreator = require('./levels/TestLevelCreator');
var HeroController = require('./creeps/HeroController');


function Game(chat, deathCallback) {
    // TODO: fix this a lot
    this.hero = new Hero(deathCallback, chat);
    this.heroController = new HeroController(null, null, this.hero);
    this.levels = [];
    this.generateNewLevel();
    this.levelIndex = 0;
    this.moveHeroToLevel(0);
    this.chat = chat;
	this.input = {};
	this.initInput();
}

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
    takeCreepTurns: function(dijk) {
        var creepControllers = this.level.getCreepControllers();
        var toRemove = [];
        for (var i = 0; i < creepControllers.length; i++) {
            var creepController = creepControllers[i];
            if (creepController.isAdjacentToHero()) {
                creepController.attackHero();
            } else if(creepController.aggroHero()) {
                var next = dijk.getNextTile(creepController.getCharacter().getLocation());
                console.log("Dikj is telling me to go to", next.toString(), 'from', creepController.getCharacter().getLocation().toString());
                var dir = creepController.getCharacter().getLocation().directionTo(next);
                if (creepController.canMove(dir)) {
                    creepController.move(dir);
                } else {
                    // TODO: remove this once we have improved dikjstra's
                    // move to the closest square to the hero
                    var loc = creepController.getCharacter().getLocation();
                    var heroLoc = creepController.getCreepMap().getHero().getLocation();
                    var left = 100000;
                    var right = 100000;
                    var canMove = false;
                    if (creepController.canMove(dir.rotateLeft())) {
                        canMove = true;
                        left = loc.add(dir.rotateLeft()).distanceSquaredTo(heroLoc)
                    } else if (creepController.canMove(dir.rotateRight())) {
                        canMove = true;
                        right = loc.add(dir.rotateRight()).distanceSquaredTo(heroLoc)
                    }
                    if (canMove) {
                        if (left < right) {
                            creepController.move(dir.rotateLeft());
                        } else {
                            creepController.move(dir.rotateRight());
                        }
                    }
                }
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
    switchCrystals: function(num) {
        this.hero.switchCrystals(num);
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
            this.switchCrystals(0);
        }, this);
        this.input[50] = new InputTrigger(function() {
            this.switchCrystals(1);
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
    }
};

module.exports = Game;