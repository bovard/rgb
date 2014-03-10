var Hero = require('./creeps/Hero');
var TestLevelCreator = require('./levels/TestLevelCreator');
var CreepMap = require('./map/CreepMap');
var Direction = require('./map/Direction');


function Game(chat, deathCallback) {
    // TODO: fix this a lot
    this.hero = new Hero(deathCallback);
    this.tileMap = TestLevelCreator.createLevel();
    this.creepMap = new CreepMap(this.tileMap.width, this.tileMap.height);
    this.chat = chat;
    this.creepMap.addHeroToMapAtLoc(
        Math.round(this.tileMap.width / 2),
        Math.round(this.tileMap.height / 2)
    );
}

Game.prototype = {
    getTileMap: function() {
        return this.tileMap;
    },
    getCreepMap: function() {
        return this.creepMap;
    },
    takeHeroTurn: function(code) {
        this.hero.actionsPerformed += 1;
        if ([12, 13, 14, 15].indexOf(code) !== -1) {
            // get the direction
            this.moveOrAttack(null);
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


    }
};

module.exports = Game;