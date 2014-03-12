var GameObject = require('../GameObject');
var utils = require('../Utility');

function Character(stats, location, numActions, radiusSquared, name) {
    this.stats = stats;
    this.location = location;
    this.health = this.getMaxHealth();
    this.numActions = numActions;
    this.radiusSquared = radiusSquared;
    this.name = name;
}

Character.prototype = new GameObject();

utils.extend(Character, {
    setHealth: function(health) { this.health = health; },
    getHealth: function() { return this.health; },
    getMaxHealth: function() {
        if (this.stats) {
            return this.stats.getMaxHP();
        } else {
            return 10;
        }
    },
    getLevel: function() {
        if (this.stats) {
            return this.stats.getLevel();
        } else {
            return 1;
        }

    },
    applyDamage: function(damage) {
        console.log("Applying damage to ", this.name);
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
    kill: function() { throw "Character.kill implement me!"; },
    getRadiusSquared: function() { return this.radiusSquared }
});

module.exports = Character;