
function Hero(deathCallback, chat) {
    this.health = 10;
    this.maxHealth = 10;
    this.shield = 0;
    this.maxShield = 10;
    this.speedBoost = 0;
    this.deathCallback = deathCallback;
    this.chat = chat;
    this.location = null;
    this.numActions = 1;
    this.actionsPerformed = 0;
    this.visionRadiusSquared = 10;
    //
    //    XXX
    //   XXXXX
    //  XXXXXXX
    //  XXX@XXX
    //  XXXXXXX
    //   XXXXX
    //    XXX
    //
}

Hero.prototype = {
    endTurn: function() {
        if (this.speedBoost > 0) {
            this.speedBoost--;
        }
        if (this.speedBoost === 0) {
            this.numActions = 1;
        }
    },
    addToSpeedBoost: function(rounds) {
        this.speedBoost += rounds;
    },
    setNumActions: function(number) {
        this.numActions = number;
    },
    attackMe: function(creep) {

        if (!creep.tryToHit(this)) {
            chat.warn(creep.attackMessage() + " but misses!");
            return;
        }

        var dmg = creep.doDamage(this);

        // first subtract from shield if there is one
        if (this.shield > 0) {
            if (this.shield > dmg) {
                this.shield -= dmg;
                dmg = 0;
            } else {
                dmg -= this.shield;
                this.shield = 0;
            }
            chat.warn(creep.getName() + " weakens your shield");
        }

        // then subtract from health
        if (dmg > 0) {
            if (this.health <= dmg) {
                this.kill();
            } else {
                this.health -= dmg;
            }
            chat.crit(creep.attackMessage() + " YOU!")
        }

    },
    kill: function() {
        chat.crit("You have died! Press Enter to restart");
        this.deathCallback();
    },
    getLocation: function() {
        return this.location;
    },
    setLocation: function(location) {
        this.location = location;
    },
    moveOrAttack: function(dir, tileMap, creepMap) {
        var x = this.location[0] + dir.x;
        var y = this.location[1] + dir.y;
        if (!tileMap.getTileAtLoc(x, y)) {
            chat.crit("You step into nothingness and feel yourself falling faster and faster into the abyss");
            this.kill();
            return;
        }
        var creep = creepMap.getCreepAtLoc(x, y);
        if (!creep) {
            creepMap.moveHeroToLoc(x, y);
            return;
        }


    }

};