var Experience = require('./Experience');
var Utility = require('./../Utility');

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
        // TODO: possibly add RGB vs victim RGB in this calc?
        var toAdd = victim.getMaxHealth() * (this.rgb.toDecimal() / 255);
        hero.addHealth(toAdd);
    },

});

module.exports = Dimension;
