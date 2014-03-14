/* Generic creep class which provides a base from which to specialize. */
var Character = require('./Character');
var util = require('./../Utility');

function Creep(difficultyLevel, attackType, numActions, maxHealth, aggroRadiusSquared, 
	rgb, coreStats) {
	// Attributes
	this.difficultyLevel = difficultyLevel; // 1-?, used by map generation alg
	this.attackType = attackType; // Creep.ATTACK_TYPE_*
	this.numActions = numActions;
	this.maxHealth = maxHealth;
	this.radiusSquared = aggroRadiusSquared;
	this.rgb = rgb;
	this.stats = coreStats;
	
	// Status
	this.actionsPerformed = 0;
	this.health = this.maxHealth;
	this.location = null;
    this.aggro = false;
}

// Class constants
Creep.ATTACK_TYPE_MELEE = 1;
Creep.ATTACK_TYPE_RANGED = 2;

Creep.prototype = new Character();

util.extend(Creep, {
    applyDamage: function(damage, rgb) {
        // calculate the amount of damage you can do
        this.health -= damage;
        if (this.health > 0) {
            return false;
        } else {
            this.kill();
            return true;
        }
    },
    getAttackMessage: function() { throw "Creep.attackMessage: abstract method called"; },
    setAggro: function(aggro) {
        this.aggro = aggro;
    },
    isAggroed: function() { return this.aggro; },
    kill: function() {},
    isHero: function() { return false; }
});

console.log(Creep);
console.log(Creep.prototype);

module.exports = Creep;