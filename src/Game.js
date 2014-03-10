var Hero = require('./creeps/Hero');
var TestLevelCreator = require('./levels/TestLevelCreator');
var CreepMap = require('./map/CreepMap');
var Direction = require('./map/Direction');
var InputTrigger = require('./InputTrigger');


function Game(chat, deathCallback) {
    // TODO: fix this a lot
    this.hero = new Hero(deathCallback);
    this.tileMap = TestLevelCreator.createLevel();
    this.creepMap = new CreepMap(this.tileMap.width, this.tileMap.height);
    this.chat = chat;
    this.creepMap.addHeroToMapAtLoc(
        Math.round(this.tileMap.width / 2),
        Math.round(this.tileMap.height / 2),
        this.hero
    );
	this.input = {};
	this.initInput();
}

Game.prototype = {
    getTileMap: function() {
        return this.tileMap;
    },
    getCreepMap: function() {
        return this.creepMap;
    },
    takeHeroTurn: function(code) {
		// If there is an InputTrigger for this code, fire it
        if (this.input[code]) {
			this.input[code].fire();
		}
    },
    moveOrAttack: function(dir) {
        var x = this.hero.location[0] + dir.x;
        var y = this.hero.location[1] + dir.y;
        if (!this.tileMap.getTileAtLoc(x, y)) {
            this.chat.crit("You step into nothingness and feel yourself falling faster and faster into the abyss");
            this.kill();
            return;
        }
        var creep = this.creepMap.getCreepAtLoc(x, y);
        if (!creep) {
            this.creepMap.moveHeroToLoc(x, y);
            // if it's a stairs, move the hero the appropriate level
            return;
        }

        /*
        if creep:
            try to hit
                if hit, damage
            if creep dead
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
	}
};

module.exports = Game;