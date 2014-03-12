var GameObject = require('../GameObject');
var utils = require('../Utility');

function Character(stats, numActions, radiusSquared, name) {
    this.stats = stats;
    this.health = this.getMaxHealth();
    this.numActions = numActions;
    this.radiusSquared = radiusSquared;
    this.name = name;
}

Character.prototype = new GameObject();

utils.extend(Character, {
    setHealth: function(health) { this.health = health; },
    addHealth: function(toAdd) {
        this.health += toAdd;
        this.health = Math.min(this.stats.getMaxHealth(), this.health);
    },
    getHealth: function() { return this.health; },
    getMaxHealth: function() {
        if (this.stats) {
            return this.stats.getMaxHealth();
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
    applyDamage: function(damage, rgb) {
        // calculate the amount of damage you can do
        damage *= Math.min(2, rgb.mask(this.getRGB()).toDecimal() / this.getRGB().toDecimal());
        console.log("Applying", damage, " damage to", this.getName());
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
    getRadiusSquared: function() { return this.radiusSquared },
    getName: function() { return this.name; }
});

module.exports = Character;