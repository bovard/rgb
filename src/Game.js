var Hero = require('./creeps/Hero');
var TestLevel = require('./levels/TestLevel');
var Direction = require('./map/Direction');
var InputTrigger = require('./InputTrigger');
var TestLevelCreator = require('./levels/TestLevelCreator');


function Game(chat, deathCallback) {
    // TODO: fix this a lot
    this.hero = new Hero(deathCallback, chat);
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
        for (var i = 0; i < creepControllers.length; i++) {
            var creepController = creepControllers[i];
            if (creepController.isAdjacentToHero()) {
                creepController.attackHero();
            } else {
                var next = dijk.getNextTile(creepController.getCharacter().getLocation());
                console.log("Dikj is telling me to go to", next.toString(), 'from', creepController.getCharacter().getLocation().toString());
                var dir = creepController.getCharacter().getLocation().directionTo(next);
                if (creepController.canMove(dir)) {
                    creepController.move(dir);
                }
            }


        }

    },
    moveOrAttack: function(dir) {
        var newLoc = this.hero.location.add(dir);
        if (!this.level.getTileMap().getTileAtLoc(newLoc)) {
            console.log("here!");
            this.chat.crit("You step into nothingness and feel yourself falling faster and faster into the abyss");
            this.hero.kill();
            return;
        }
        var creep = this.level.getCreepMap().getCreepAtLoc(newLoc);
        if (!creep) {
            this.level.getCreepMap().moveHeroToLoc(newLoc);
            // if it's a stairs, move the hero the appropriate level
            var level = this.levelIndex;
            if (this.level.getTileMap().getUpStairsLoc().isEqualTo(newLoc)) {
                this.moveHeroToLevel(++level);
            } else if (this.level.getTileMap().getDownStairsLoc().isEqualTo(newLoc) && this.levelIndex != 0) {
                this.moveHeroToLevel(--level);
            }
            return;
        }

        /*
        if character:
            try to hit
                if hit, damage
            if character dead
                move,
                absorb animus
            return;
         */


    },
	initInput: function() {
		this.input[37] = new InputTrigger(function() {
			this.hero.actionsPerformed += 1;
			this.moveOrAttack(Direction.WEST);
		}, this);
		this.input[38] = new InputTrigger(function() {
			this.hero.actionsPerformed += 1;
			this.moveOrAttack(Direction.NORTH);
		}, this);
		this.input[39] = new InputTrigger(function() {
			this.hero.actionsPerformed += 1;
			this.moveOrAttack(Direction.EAST);
		}, this);
		this.input[40] = new InputTrigger(function() {
			this.hero.actionsPerformed += 1;
			this.moveOrAttack(Direction.SOUTH);
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
    }
};

module.exports = Game;