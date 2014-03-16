var CoreStats = require('../CoreStats');

function NinjaStats(level) {
    this.str = CoreStats.NinjaSeed.str;
    this.agi = CoreStats.NinjaSeed.agi;
    this.con = CoreStats.NinjaSeed.con;
    this.level = 2;
    this.statGain = CoreStats.NinjaGain;
    for (var i = 0; i < level; i++) {
        this.levelUp();
    }
    this.experience = this.getXPForLevel(level);
}

NinjaStats.prototype = new CoreStats();

module.exports = NinjaStats;