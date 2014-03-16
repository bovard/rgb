var CoreStats = require('../CoreStats');

function SlowStats(level) {
    this.str = CoreStats.SlowSeed.str;
    this.agi = CoreStats.SlowSeed.agi;
    this.con = CoreStats.SlowSeed.con;
    this.level = 0;
    this.statGain = CoreStats.SlowGain;
    for (var i = 0; i < level; i++) {
        this.levelUp();
    }
    this.experience = this.getXPForLevel(level);
}

SlowStats.prototype = new CoreStats();

module.exports = SlowStats;