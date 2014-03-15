/* Generic creep class which provides a base from which to specialize. */
var Character = require('./Character');
var util = require('./../Utility');
var Messages = require('./Messages');
var CoreStats = require('./CoreStats');

function Creep(options) {
	// Attributes
    // required attributes
    this.validateOptions(options); // makes sure there 4 are here
    this.repr = options.repr;
    this.name = options.name;
	this.radiusSquared = options.radiusSquared;
	this.rgb = options.rgb;

    // optional attributes
    this.numActions = options.numActions || 1;
	this.stats = options.stats || new CoreStats(1);
    this.messages = options.messages || new Messages(this.name);
	
	// Status
	this.health = this.stats.getMaxHealth();
	this.location = null;
    this.aggro = false;
}

// Class constants
Creep.ATTACK_TYPE_MELEE = 1;
Creep.ATTACK_TYPE_RANGED = 2;

Creep.prototype = new Character();

util.extend(Creep, {
    validateOptions: function(options) {
        util.forEachIn(['repr', 'name', 'radiusSquared', 'rgb'], function(key, value) {
            if (!options[value]) {
                throw "options." + value + " not found";
            }
        });
    },
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
    getAttackHitMessage: function() {
        return this.messages.getHitMessage()
    },
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