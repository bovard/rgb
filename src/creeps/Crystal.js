var Experience = require('./Experience');
var Utility = require('./../Utility');

function Crystal(rgb) {
    this.experience = 0;
    this.level = 1;
    this.rgb = rgb;
    this.unitRGB = rgb.getUnitVector();
}

Crystal.prototype = new Experience();

Utility.extend(Crystal, {
    levelUp: function() {
        this.level++;
        this.rgb.add(this.unitRGB);
    },
    getRGB: function() {
        return this.rgb;
    }

});

module.exports = Crystal;
