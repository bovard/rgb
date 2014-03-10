/* Hero class. */
var CoreStats = require('./CoreStats');
var RGB = require('../RGB');

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
	this.coreStats = new CoreStats(1, 1);
    this.rgb = new RGB(255, 255, 255);
    this.repr = '@';
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
	takeDamage: function(damage) {
        // first subtract from shield if there is one
        if (this.shield > 0) {
            if (this.shield > dmg) {
                this.shield -= dmg;
                dmg = 0;
            } else {
                dmg -= this.shield;
                this.shield = 0;
            }
            this.chat.warn(creep.getName() + " weakens your shield");
        }

        // then subtract from health
        if (dmg > 0) {
            if (this.health <= dmg) {
                this.kill();
            } else {
                this.health -= dmg;
            }
            this.chat.crit(creep.attackMessage() + " YOU!")
        }
	},
    kill: function() {
        this.chat.crit("You have died! Press Enter to restart");
        this.deathCallback();
    },
    getLocation: function() {
        return this.location;
    },
    setLocation: function(location) {
        this.location = location;
    },
    getRGB: function() {
        return this.rgb;
    },
    getRepr: function() {
        return this.repr;
    }
};

module.exports = Hero;
