var CoreStats = require('../CoreStats');

function HardStats(level) {
    this.str = CoreStats.HardSeed.str;
    this.agi = CoreStats.HardSeed.agi;
    this.con = CoreStats.HardSeed.con;
    this.level = 0;
    this.statGain = CoreStats.HardGain;
    for (var i = 0; i < level; i++) {
        this.levelUp();
    }
    this.experience = this.getXPForLevel(level);
}

HardStats.prototype = new CoreStats();

module.exports = HardStats;