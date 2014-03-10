/* Generic creep class which provides a base from which to specialize. */
var GameObject = require('./../GameObject');
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

util.inherit(Creep, GameObject);

Creep.prototype = {
	getHealth: function() { return this.health; },
	canMove: function(tile) { throw "Creep.canMove: abstract method called"; },
    getAttackMessage: function() { throw "Creep.attackMessage: abstract method called"; },
    tryToHit: function(hero) { throw "Creep.tryToHit: abstract method called"; },
    doDamage: function(hero) { throw "Creep.doDamage: abstract method called"; },
    getLocation: function() { return this.location; },
    setLocation: function(loc) { this.location = loc }
};

module.exports = Creep;