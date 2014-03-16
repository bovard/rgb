/* Hero class. */
var CoreStats = require('./CoreStats');
var Character = require('./Character');
var Dimension = require('./Dimension');
var RGB = require('../RGB');
var util = require('./../Utility');
var Chat = require('./../Chat');

function Hero(deathCallback) {
    this.name = "You";
    this.shield = 0;
    this.maxShield = 10;
    this.speedBoost = 0;
    this.deathCallback = deathCallback;
    this.location = null;
    this.numActions = 1;
	this.stats = new CoreStats(1, CoreStats.HeroStatGain, CoreStats.HeoStatSeed);
    this.health = this.stats.getMaxHealth();
    console.log("made hero with hp:", this.health);
    this.rgb = new RGB(255, 255, 255);
    this.repr = '@';
    this.dimensions = [
        new Dimension(new RGB(125, 0, 0)),
        new Dimension(new RGB(0, 125, 0)),
        new Dimension(new RGB(0, 0, 125))
    ];
    this.dimension = this.dimensions[0];
    this.powerUpCount = 0;
    this.poweredUp = false;
    this.requiredPowerUps = 10;
    this.dimensionCoolDown = 0;
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

Hero.prototype = new Character();

util.extend(Hero, {
    tick: function() {
        this.actionDelay -= 1;
        this.actionDelay = Math.max(this.actionDelay, 0);
        if (this.speedBoost > 0) {
            this.speedBoost = Math.max(this.speedBoost - 1, 0);
            if (this.speedBoost === 0) {
                this.numActions = 1;
                this.poweredUp = false;
                Chat.warn("You feel yourself slow down");
            }
        }
        this.dimensionCoolDown = Math.max(this.dimensionCoolDown - 1, 0);
    },
    getPowerUpCurr: function() {
        return this.powerUpCount;
    },
    getPowerUpMax: function() {
        return this.requiredPowerUps;
    },
    getPowerUpPercent: function() {
        return Math.round((this.powerUpCount * 100)/this.requiredPowerUps);
    },
    canPowerUp: function() {
        console.log(this.powerUpCount, "===", this.requiredPowerUps);
        return this.powerUpCount === this.requiredPowerUps;
    },
    powerUp: function() {
        if (!this.canPowerUp()) {
            throw "Can't power up!"
        }
        this.powerUpCount = 0;
        this.poweredUp = true;
    },
    addPowerUpCount: function() {
        console.log("Adding to powerup count");
        if (!this.poweredUp) {
            this.powerUpCount = Math.min(this.powerUpCount + 1, this.requiredPowerUps);
        }
        console.log("Powerups:", this.powerUpCount);
    },
    removePowerUpCount: function() {
        this.powerUpCount = Math.max(this.powerUpCount - 1, 0);
    },
    resetPowerUpCount: function() {
        this.powerUpCount = 0;
    },
    isPoweredUp: function() {
        return this.poweredUp;
    },
    addToSpeedBoost: function(rounds) {
        this.speedBoost += rounds;
        this.numActions = 2;
    },
    setNumActions: function(number) {
        this.numActions = number;
    },
	applyDamage: function(damage, rgb) {
        // calculate the amount of damage you can do
        console.log("Applying", damage, " damage to", this.getName());
        // first subtract from shield if there is one
        if (this.shield > 0) {
            if (this.shield > damage) {
                this.shield -= damage;
                damage = 0;
            } else {
                damage -= this.shield;
                this.shield = 0;
            }
        }

        // then subtract from health
        if (damage > 0) {
            if (this.health <= damage) {
                this.kill();
            } else {
                this.health -= damage;
            }
        }
	},
    gainXPForKill: function(target) {
        Chat.log("You killed " + target.name + "!");
        if (this.stats.gainXPForKill(target)) {
            Chat.ding("You leveled up!");
            this.health = this.getMaxHealth();
        }
        this.dimension.gainXPForKill(target);
        this.dimension.applyKillEffects(this, target);
    },
    getVisionRadiusSquared: function() {
        return this.stats.getLevel() + 20;
    },
    kill: function() {
        Chat.crit("You have died! Press any key to restart");
        this.deathCallback();
    },
    getDimension: function() {
        return this.dimension;
    },
    isHero: function() {
        return true;
    },
    switchDimensions: function(index) {
        this.dimension = this.dimensions[index];
        this.dimensionCoolDown = 5;
    },
    canSwitchDimensions: function() {
        return this.dimensionCoolDown <= 0;
    }
});

module.exports = Hero;
