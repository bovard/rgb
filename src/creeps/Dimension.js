var Experience = require('./Experience');
var Utility = require('./../Utility');
var Chat = require('../Chat');

function Dimension(rgb) {
    this.experience = 0;
    this.level = 1;
    this.rgb = rgb;
    this.unitRGB = rgb.getUnitVector();
}

Dimension.prototype = new Experience();

Utility.extend(Dimension, {
    levelUp: function() {
        this.level++;
        this.rgb.add(this.unitRGB);
    },
    getRGB: function() {
        return this.rgb;
    },
    applyKillEffects: function(hero, victim) {
        var toAdd = victim.getMaxHealth();
        hero.addHealth(toAdd);
        Chat.log("You absorb " + victim.getName() + "'s life force.")
    }
});

module.exports = Dimension;
