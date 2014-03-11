/* Generic creep class which provides a base from which to specialize. */
var GameObject = require('./../GameObject');
var Character = require('./Character');
var util = require('./../Utility');

function Creep(difficultyLevel, attackType, numActions, maxHealth, aggroRadiusSquared, 
	rgb, coreStats) {
	// Attributes
	this.difficultyLevel = difficultyLevel; // 1-?, used by map generation alg
	this.attackType = attackType; // Creep.ATTACK_TYPE_*
	this.numActions = numActions;
	this.maxHealth = maxHealth;
	this.aggroRadiusSquared = aggroRadiusSquared;
	this.rgb = rgb;
	this.coreStats = coreStats;
	
	// Status
	this.actionsPerformed = 0;
	this.health = this.maxHealth;
	this.location = null;
}

// Class constants
Creep.ATTACK_TYPE_MELEE = 1;
Creep.ATTACK_TYPE_RANGED = 2;

Creep.prototype = new Character();

util.extend(Creep, {
    getAttackMessage: function() { throw "Creep.attackMessage: abstract method called"; },
});

console.log(Creep);
console.log(Creep.prototype);

module.exports = Creep;