var GameObject = require('../GameObject');
var utils = require('../Utility');

function Character(stats, location, maxHealth, numActions, radiusSquared) {
    this.stats = stats;
    this.location = location;
    this.health = maxHealth;
    this.numActions = numActions;
    this.radiusSquared = radiusSquared;
}

utils.inherit(Character, GameObject);

utils.extend(Character, {
    getHealth: function() { return this.health; },
    applyDamage: function(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return false;
        } else {
            this.kill();
            return true;
        }
    },
    getLocation: function() { return this.location; },
    setLocation: function(loc) { this.location = loc },
    getStats: function() {return this.stats;},
    getNumActions: function() {return this.numActions; },
    isDead: function() {return this.health <= 0; },
    kill: function() { throw "Character kill implement me!"; },
    getRadiusSquared: function() { return this.radiusSquared }
});