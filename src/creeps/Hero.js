/* Hero class. */
var CoreStats = require('./CoreStats');
var Character = require('./Character');
var Crystal = require('./Crystal');
var RGB = require('../RGB');
var util = require('./../Utility');

function Hero(deathCallback, chat) {
    this.name = "Aver";
    this.health = 10;
    this.shield = 0;
    this.maxShield = 10;
    this.speedBoost = 0;
    this.deathCallback = deathCallback;
    this.chat = chat;
    this.location = null;
    this.numActions = 1;
    this.actionsPerformed = 0;
	this.stats = new CoreStats(1, CoreStats.HeroStatGain, CoreStats.HeroStatGain);
    this.rgb = new RGB(255, 255, 255);
    this.repr = '@';
    this.crystals = [new Crystal(new RGB(125, 0, 0)), new Crystal(new RGB(0, 255, 0))];
    this.crystal = this.crystals[0];
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
	applyDamage: function(damage, rgb) {
        // calculate the amount of damage you can do
        damage *= Math.min(2, rgb.mask(this.getRGB()).toDecimal() / this.getRGB().toDecimal());
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
        this.stats.gainXPForKill(target);
        this.crystal.gainXPForKill(target);
    },
    getVisionRadiusSquared: function() {
        return this.stats.getLevel() + 10;
    },
    kill: function() {
        this.chat.crit("You have died! Press Enter to restart");
        this.deathCallback();
    },
    getCrystal: function() {
        return this.crystal;
    }
});

module.exports = Hero;
